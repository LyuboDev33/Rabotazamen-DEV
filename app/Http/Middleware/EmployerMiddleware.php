<?php

namespace App\Http\Middleware;

use App\Models\Role;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Symfony\Component\HttpFoundation\Response;

class EmployerMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response|InertiaResponse
    {

        $roles = Auth::user()->roles->pluck('role_name')->toArray();

        if (!in_array(Role::EMPLOYER, $roles)) {
            return Inertia::render('Errors/NoMiddlewareAccess');
        }

        return $next($request);
    }
}
