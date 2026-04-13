<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\RoleUser;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Exceptions\ThrottleRequestsException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function createEmployer(): Response
    {
        return Inertia::render('Auth/RegisterEmployer');
    }

    /**
     * Display the registration view.
     */
    public function createCandidate(): Response
    {
        return Inertia::render('Auth/RegisterCandidate');
    }

    /** Check for throttle requests
     * @param Request $request
     * @param string $keyPrefix
     * @return void
     */
    private function throttle(Request $request, $keyPrefix = 'register'): void
    {
        $key = $keyPrefix . '|' . $request->ip();

        $maxAttempts = 10;
        $decaySeconds = 60;

        if (RateLimiter::tooManyAttempts($key, $maxAttempts)) {
            $seconds = RateLimiter::availableIn($key);

            throw new ThrottleRequestsException();
        }

        RateLimiter::hit($key, $decaySeconds);
    }

    /** Method to verify the capcha when registering
     * @param string $token
     * @param string $expectedAction
     */
    private function verifyRecaptcha($token, $expectedAction = 'register')
    {
        $response = Http::asForm()->post(
            'https://www.google.com/recaptcha/api/siteverify',
            [
                'secret' => config('services.google_recaptcha.secret_key'),
                'response' => $token,
            ]
        );

        $result = $response->json();

        return $result;

        return $result['success'] && ($result['action'] ?? '') === $expectedAction
            && ($result['score'] ?? 0) >= 0.5;
    }


    /**
     * Handle candidate registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {

        $this->throttle($request, 'register-candidate');

        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'phone' => 'required|string|max:50',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'recaptcha_token' => 'required'
        ]);

        if (!$this->verifyRecaptcha($request->recaptcha_token, 'register')) {
            abort(500);
        }

        $previousURL = explode('/', url()->previous());
        $role = end($previousURL);

        $allRoles = Role::pluck('role_name')->toArray();

        if (!in_array($role, $allRoles)) {
            abort(403, 'Invalid role provided');
        }


        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'city' => $request->city,
            'password' => Hash::make($request->password),
        ]);


        $user->roles()->attach(
            Role::where('role_name', $role)->first()
        );

        event(new Registered($user));
        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }


}
