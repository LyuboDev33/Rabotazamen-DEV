<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use App\Http\Controllers\Controller;
use Inertia\Inertia;



class UsersController extends Controller
{
    /** Return all the users in the system */
    public function index()
    {
        return Inertia::render('BackEnd/Admin/Users/Index', [
            'users' => User::with('roles')->get()
        ]);
    }

    /** Show a single user
     * @param int @user_id
     */
    public function show($user_id)
    {
        $user = User::where('id', $user_id)->first();

        if (!$user) {
            return Inertia::render('NotFoundUser');
        }

        return Inertia::render('BackEnd/Admin/Users/Show', [
            'user' =>  $user->load('roles'),
            'roles' => Role::all(),
        ]);
    }


    /** View for granting access and creating a user */
    public function grantAccess()
    {
        return Inertia::render('BackEnd/Admin/Users/GrantAccess', [
            'roles' => Role::get()
        ]);
    }

    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function create(Request $request)
    {
        $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', Password::defaults()],
        ]);

        User::create([
            'first_name' => $request->name,
            'last_name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'created_at' => now()
        ]);


        Inertia::flash([
            'successfullUserCreation' => 'Потребителят беше успешно създаден!'
        ]);


        return redirect(route('users.all'));
    }


    /** Delete a user
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Request $request)
    {
        $userId = $request->userId;

        $user = User::where('id', $userId)->first();

        if (!$user) {
            Inertia::flash([
                'failedUserDeletion' => 'Потребителя не същестува...!'
            ]);

            return back();
        }

        $user->delete();

        Inertia::flash([
            'userSuccessDeletion' => 'Потребителят беше изтрит успешно!'
        ]);

        return back();
    }
}
