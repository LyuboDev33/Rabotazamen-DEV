<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Backend\Candidate;
use App\Models\Role;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use Illuminate\Http\RedirectResponse;

class VerifyEmailController extends Controller
{
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(route('dashboard', absolute: false) . '?verified=1');
        }

        if ($request->user()->markEmailAsVerified()) {
            event(new Verified($request->user()));
        }

        $user = $request->user();

        if(!$user) {
            return redirect(route('login'));
        }

        if ($user->roles->pluck('role_name')->contains(Role::CANDIDATE)) {

            if (!Candidate::where('user_id', $user->id)->exists()) {
                Candidate::create([
                    'user_id' => $user->id,
                ]);
            }
        }
        return redirect()->intended(route('dashboard', absolute: false) . '?verified=1');
    }
}
