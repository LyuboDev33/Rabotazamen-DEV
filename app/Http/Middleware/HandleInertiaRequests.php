<?php

namespace App\Http\Middleware;

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
            'csrf_token' => csrf_token(), 
        ];
    }
}
