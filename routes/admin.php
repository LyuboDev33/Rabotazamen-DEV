<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\RolesController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\JobCategoryController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Backend\SupportTicketController;
use App\Models\JobCategory;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware('auth')->group(function () {



    /** All Admin Routing and middleware */
    Route::middleware('admin')
        ->prefix('dashboard/admin')
        ->group(function () {

            Route::get('/', function () {
                return Inertia::render('BackEnd/Admin/Dashboard');
            });

            /** ------------------------------------- */
            /** Routes available only to Super admins */
            /** ------------------------------------- */

            Route::middleware('super_admin')->group(function () {

                /** Download XML file */
                Route::get('/downloadXML', [ProfileController::class, 'downloadStaticXML'])->name('downloadStaticXML');

                /** All Users routes for Super Admins */
                Route::get('/access', [UsersController::class, 'grantAccess']);
                Route::post('/access/create', [UsersController::class, 'create'])->name('user.create');
                Route::delete('/account/delete', [UsersController::class, 'delete'])->name('user.delete');

                /** All roles and permissions  */
                Route::get('/roles', [RolesController::class, 'index'])->name('roles.index');
                // Route::get('/roles/create-role', [RolesController::class, 'createRoleView']);
                Route::patch('/roles/assign-user-role', [RolesController::class, 'assignRoles'])->name('user.assign.role');

                Route::get('/roles/{role_id}/assign-permissionss', [RolesController::class, 'permissions']);
                Route::post('/permissions/assign', [RolesController::class,  'permissionsAssign'])->name('permissions.asign');
                Route::post('/permissions/create', [RolesController::class,  'permissionCreate'])->name('permissions.create');

                /** All Users Routing */
                Route::get('/users', [UsersController::class, 'index'])->name('users.all');
                Route::get('/users/{user_id}/edit', [UsersController::class, 'show'])->name('user.show');

                /** All cities routes */
                Route::get('/cities', [CityController::class, 'index']);
                Route::post('/cities', [CityController::class, 'store'])->name('cities.store');
                Route::delete('/cities/delete', [CityController::class, 'destroy'])->name('cities.destroy');

            });

            /** -------------------------------------------- */
            /** Edn of routes available only to Super admins */
            /** -------------------------------------------- */

            Route::get('/job-categories', [JobCategoryController::class, 'index']);
            Route::get('/job-categories/create-view', [JobCategoryController::class, 'createCategoryView']);
            Route::get('/job-category/edit/{job_category_id}', [JobCategoryController::class, 'jobCategoryEdit'])->name('job.category.edit');

            Route::post('/job-categories/create-category', [JobCategoryController::class, 'createCategory'])->name('job.category.create');

            Route::post('/job-role/create/{category}', [JobCategoryController::class, 'createJobRole'])->name('job.role.create');
            Route::patch('/job-role/update', [JobCategoryController::class, 'updateJobRole'])->name('job.role.update');
            Route::delete('/job-role/delete', [JobCategoryController::class, 'deleteJobRole'])->name('job.role.delete');


            /** Routing for the ticketing system */
            Route::get('/support-tickets', [SupportTicketController::class,  'indexAdmin']);
            Route::get('/support-tickets/{ticket_id}', [SupportTicketController::class,  'show']);

            Route::post('/support-tickets/reply', [SupportTicketController::class,  'reply']);
            Route::get('/support-tickets/delete', [SupportTicketController::class,  'delete']);

            /** Blog Routing */
            Route::get('/blog', [BlogController::class, 'index'])->name('blog.index');
            Route::get('/blog/{slug}/edit', [BlogController::class, 'show']);
            Route::get('/blog/create-view', [BlogController::class, 'createBlogView'])->name('blog.create-view');


            Route::post('/blog/create', [BlogController::class, 'create'])->name('blog.create');
            Route::patch('/blog/update', [BlogController::class, 'update'])->name('blog.update');
            Route::delete('/blog/delete', [BlogController::class, 'delete'])->name('blog.delete');
        });
    /** End of All Admin Routing and middleware */


});

