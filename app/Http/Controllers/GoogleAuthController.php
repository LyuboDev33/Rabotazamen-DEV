<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Socialite;


class GoogleAuthController extends Controller
{
    /**
     * @param string $access
     */
    public function index($access = 'candidate')
    {
        session(['access' => $access]);
        return Socialite::driver('google')->redirect();
    }

    /** Redirect the user who is trying to register */
    public function redirectURL()
    {
        $googleUser = Socialite::driver('google')->user();
        $access = session('access');

        $role = Role::where('role_name', $access)->first();

        if (!$role) {
            abort(500);
        }

        $user = User::where('email', $googleUser->email)->first();

        if (!$user) {

            $fullName = explode(' ', $googleUser->name);
            $firstName = $fullName[0];
            $lastName = $fullName[1] ?? "";

            $user = User::create([
                'first_name' => $firstName,
                'last_name' => $lastName,
                'email' => $googleUser->email,
                'google_id' => $googleUser->id,
                'google_token' => $googleUser->token,
                'google_refresh_token' => $googleUser->refreshToken,
                'role_id' => $role->id,
            ]);

            $user->roles()->attach($role->id);
        } else {

            $user->update([
                'google_token' => $googleUser->token,
                'google_refresh_token' => $googleUser->refreshToken,
            ]);
        }

        Auth::login($user);

        session()->forget('access');

        return redirect('/dashboard');
    }
}
