<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SuperAdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();

        // Check if the user has a role named 'super_admin';
        $isSuperAdmin = $user->roles->contains('role_name', 'super_admin');

        if (!$isSuperAdmin) {
            return Inertia::render('NoAccess');
        }

        return $next($request);
    }
}
