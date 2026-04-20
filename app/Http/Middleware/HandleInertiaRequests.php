<?php

namespace App\Http\Middleware;

use App\Models\Backend\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Check if the company profile is fully completed
     * based on all required (non-nullable) fields.
     */
    private static function isCompanyComplete($company): bool
    {

        return filled($company->company_name) &&
            filled($company->company_eik) &&
            filled($company->company_industry) &&
            filled($company->company_size) &&
            filled($company->company_location) &&
            filled($company->company_address) &&
            filled($company->company_logo) &&
            filled($company->company_banner) &&
            filled($company->company_full_description) &&

            count($company->company_benefits) > 0 &&
            count($company->work_locations) > 0 &&
            count($company->work_languages) > 0;
    }

    /** Pass the company status
     * Takes into account completeness of the company profile
     * If user is not logged in, stop the logic and return null
     * @return string
     */
    private static function companyStatus(): string|null
    {
        $user = Auth::user();

        if (!$user) {
            return null;
        }

        $company = $user->companies()->first();

        if (!$company) {
            return Company::STATUS_NO_COMPANY;
        }

        if (!static::isCompanyComplete($company)) {
            return Company::STATUS_INCOMPLETE;
        }

        return $company->status ?? Company::STATUS_INCOMPLETE;
    }

    /**
     * Check if user has uploaded a Profile Picture
     * @return string
     */
    private static function profilePicture(): string
    {
        $user = Auth::user();

        if (empty($user->profile_pic)) {
            return asset('/assets_dashboard/images/default-avatar.png');
        }

        $path = public_path('/assets_dashboard/images/profile_pics/' . $user->profile_pic);

        return file_exists($path)
            ? asset('/assets_dashboard/images/profile_pics/' . $user->profile_pic)
            : asset('/assets_dashboard/default-avatar.png');
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        if (Auth::check()) {
            $isAdmin = Auth::user()->roles
                ->whereIn('role_name', ['admin', 'super_admin'])
                ->isNotEmpty();

            $isCandidate = Auth::user()->roles
                ->whereIn('role_name', ['admin', 'candidate'])
                ->isNotEmpty();

            $isEmployer = Auth::user()->roles
                ->whereIn('role_name', ['admin', 'employer'])
                ->isNotEmpty();


            $permissions = Auth::user()->getPermissions(); // Get all the permissions of a User
        }

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user(),
                'isAdmin' => $isAdmin ?? null,
                'isEmployer' => $isEmployer ?? null,
                'isCandidate' => $isCandidate ?? null,
                'profilePic' => static::profilePicture(),
                'permissions' => $permissions ?? null,
            ],
            'companyStatus' => static::companyStatus(),
            'recaptchaSiteKey' => config('services.google_recaptcha.site_key'),
            'csrf_token' => csrf_token(),
        ];
    }
}
