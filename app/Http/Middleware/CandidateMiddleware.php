<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Symfony\Component\HttpFoundation\Response;

class CandidateMiddleware
{
    public function handle(Request $request, Closure $next): Response|InertiaResponse
    {
        $user = Auth::user();

        if (!$user || !$user->roles->pluck('role_name')->contains(Role::CANDIDATE)) {
            return Inertia::render('Errors/NoMiddlewareAccess');
        }

        return $next($request);
    }
}
