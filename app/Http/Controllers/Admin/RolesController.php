<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RolesController extends Controller
{
    /** Return the Roles view */
    public function index()
    {
        return Inertia::render('BackEnd/Admin/Roles/Index', [
            'roles' => Role::with('permissions')->get()
        ]);
    }


    /** Assign permissions to a role
     * @param int $role_id
     */
    public function permissions($role_id)
    {

        $role = Role::where('id', $role_id)->first();

        if (!$role) {
            return Inertia::render('NotFoundRole');
        }

        return Inertia::render('BackEnd/Admin/Roles/Permissions', [
            'role' => $role->load('permissions'),
            'permissions' => Permission::all(),
        ]);
    }

    /** Create a new permission
     * @param Request $request
     * @return RedirectResponse
     */
    public function permissionCreate(Request $request)
    {
        $request->validate([                                        // The regex means "letters and dots in this format: ",
                                                                    // blog.createOrUpdate.depecate etc...
            'permission' => ['required', 'unique:permissions,name', 'regex:/^[a-zA-Z]+(\.[a-zA-Z]+)+$/',
        ],
            'permission_description' => ['required']
        ], [
            'permission.regex' => 'Моля въведете правилен формат - Пр: blog.create',
            'permission.unique' => 'Вече съществува това право'
        ]);

        Permission::create([
            'name' => $request->permission,
            'description' => $request->permission_description
        ]);

        Inertia::flash([
            'succesfullyCreatedPermission' => 'Успешно създадохте нова роля!'
        ]);

        return back();
    }

    /** Assign permissions to a role
     * @param Request $request
     * @return RedirectResponse
     */
    public function permissionsAssign(Request $request)
    {
        $request->validate([
            'role_id' => ['required', 'exists:roles,id'],
            'permissions.*' => ['exists:permissions,id'],
        ]);

        $role = Role::where('id', $request->role_id)->first();

        if (!$role) {
            Inertia::flash([
                'errorAssigningRole' => 'Възникна грешка с добавянето на роля.'
            ]);
            return back();
        }

        $role->permissions()->sync($request->permissions ?? []);

        Inertia::flash([
            'succesfullyAssignedPermissions' => 'Промените са запазени успешно'
        ]);

        return back();
    }

    /** Assing roles to a user
     * @param Request $request
     * @return RedirectResponse
     */
    public function assignRoles(Request $request)
    {
        $request->validate([
            'user_id' => ['required', 'exists:users,id'],
            'roles.*' => ['exists:roles,id'],
        ]);

        $user = User::find($request->user_id);

        if (!$user) {
            Inertia::flash([
                'noSuchUser' => 'Няма такъв потребител в системата!'
            ]);
            return back();
        }


        $authUser = Auth::user();
        $authUserRoleIds = $authUser->roles->pluck('id')->toArray();
        $superAdminId = Role::where('role_name', 'super_admin')->value('id');

        $isAuthUserSuperAdmin = in_array($superAdminId, $authUserRoleIds);

        if ($authUser->id === $user->id && $isAuthUserSuperAdmin) {
            if (!in_array($superAdminId, $request->roles ?? [])) {
                Inertia::flash([
                    'cannotRemoveAdminRole' => 'Не може да премахнете super_admin от собствения си акаунт!'
                ]);
                return back();
            }
        }

        // Sync roles for the target user
        $user->roles()->sync($request->roles ?? []);

        Inertia::flash([
            'assignedRolesSuccesfully' => 'Промените бяха запазени успешно!'
        ]);

        return back();
    }


    /** The View for creating a role */
    // public function createRoleView () {

    // }



}
