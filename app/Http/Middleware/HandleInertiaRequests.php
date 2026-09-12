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
     * Return Stripe subscription information
     *
     * @return array|null
     */
    private static function stripe()
    {
        if (!Auth::check()) {
            return null;
        }

        $user = Auth::user();

        $subscription = $user->subscriptions()
            ->where('stripe_status', 'active')
            ->latest()
            ->first();

        if (!$subscription) {
            return [
                'has_subscription' => false,
                'message' => 'Нямате активен абонаментен план в момента',
            ];
        }

        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));

        $stripeSub = $stripe->subscriptions->retrieve(
            $subscription->stripe_id,
            ['expand' => ['items']]
        );

        $price = $stripeSub->items->data[0]->price ?? null;

        $interval = $price?->recurring?->interval;
        $intervalCount = $price?->recurring?->interval_count ?? 1;

        $startedAt = \Carbon\Carbon::createFromTimestamp($stripeSub->start_date);

        // THIS is the correct cancellation logic
        $endsAt = null;

        if ($stripeSub->cancel_at_period_end) {
            $endsAt = \Carbon\Carbon::createFromTimestamp($stripeSub->cancel_at);
        }

        $isCancelledButActive =
            $stripeSub->cancel_at_period_end === true &&
            $stripeSub->status === 'active';

        $currentPeriodEnd = $stripeSub->items->data[0]->current_period_end;


        return [
            'has_subscription' => true,

            'name' => $subscription->type,
            'status' => $stripeSub->status,

            'active' => $stripeSub->status === 'active',

            'started_at' => $startedAt->format('d.m.Y'),

            'interval' => $intervalCount . ' ' . $interval,

            'cancel_at_period_end' => $stripeSub->cancel_at_period_end,

            'cancelled_at' => $stripeSub->canceled_at
                ? \Carbon\Carbon::createFromTimestamp($stripeSub->canceled_at)->format('d.m.Y')
                : null,

            'ends_at' => $endsAt
                ? $endsAt->format('d.m.Y')
                : null,

            'current_period_end' => $currentPeriodEnd
                ? \Carbon\Carbon::createFromTimestamp($currentPeriodEnd)->format('d.m.Y')
                : null,

            'message' => $isCancelledButActive
                ? 'В случай, че спрете абонамента си, все още ще имате достъп до системата до '
                . $endsAt->format('d.m.Y')
                : null,
        ];
    }

    /**
     * Check if the company profile is fully completed
     * based on all required (non-nullable) fields.
     * @param Company $company
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
     *
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
     * Check candidate profile status.
     *
     * @return array|null
     */
    private static function candidateStatus(): array|null
    {
        $user = request()->user();

        if (!$user) {
            return null;
        }

        $candidate = $user->candidate()
            ->with([
                'cvs',
                'workExperience',
                'education',
            ])
            ->first();

        if (!$candidate) {
            return [
                'candidateId'     => null,
                'isCandidate'     => false,
                'profileComplete' => false,
                'cvs'             => [],
            ];
        }

        $requiredFields = [
            'professional_title',
            'phone',
            'location',
            'work_status',
            'years_experience',
            'seniority',
            'min_salary',
            'max_salary',
            'about_me',
        ];

        $profileComplete = true;

        foreach ($requiredFields as $field) {
            if (blank($candidate->{$field})) {
                $profileComplete = false;
                break;
            }
        }

        if (
            empty($candidate->skills) ||
            empty($candidate->work_model)
        ) {
            $profileComplete = false;
        }

        if ($candidate->cvs->isEmpty()) {
            $profileComplete = false;
        }

        if ($candidate->workExperience->isEmpty()) {
            $profileComplete = false;
        }

        if ($candidate->education->isEmpty()) {
            $profileComplete = false;
        }

        return [
            'candidateId'     => $candidate->id,
            'isCandidate'     => true,
            'profileComplete' => $profileComplete,
            'cvs'             => $candidate->cvs,
        ];
    }

    /**
     * Check if user has uploaded a Profile Picture
     * @return string
     */
    private static function profilePicture(): string
    {
        $user = Auth::user();

        if (empty($user->profile_pic)) {
            return asset('/assets_dashboard/images/profile_pics/default-avatar.png');
        }

        $path = public_path('/assets_dashboard/images/profile_pics/' . $user->profile_pic);

        return file_exists($path)
            ? asset('/assets_dashboard/images/profile_pics/' . $user->profile_pic)
            : asset('/assets_dashboard/images/profile_pics/default-avatar.png');
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
                'user'        => $request->user(),
                'isAdmin'     => $isAdmin ?? null,
                'isEmployer'  => $isEmployer ?? null,
                'isCandidate' => $isCandidate ?? null,
                'profilePic'  => static::profilePicture(),
                'permissions' => $permissions ?? null,
            ],
            'stripe'     => static::stripe(),
            'companyStatus'    => static::companyStatus(),
            'candidateStatus'  => static::candidateStatus(),
            'recaptchaSiteKey' => config('services.google_recaptcha.site_key'),
            'csrf_token'       => csrf_token(),
        ];
    }
}
