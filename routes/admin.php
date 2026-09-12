<?php

use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\CityController;
use App\Http\Controllers\Admin\JobCategoryController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Admin\ReviewsController;
use App\Http\Controllers\Admin\RolesController;
use App\Http\Controllers\Admin\UsersController;
use App\Http\Controllers\Backend\CompaniesController;
use App\Http\Controllers\Backend\SupportTicketController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::middleware(['auth', 'verified'])->group(function () {

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

                Route::prefix('/reviews')->group(function  () {
                    Route::get('/', [ReviewsController::class, 'index'])->name('super_admin.reviews.index');
                    Route::patch('/{review}/status', [ReviewsController::class, 'updateStatus'])->name('super_admin.reviews.status');

                });

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

                /** All routes for the companies */
                Route::get('/companies', [CompaniesController::class, 'index']);
                Route::get('/companies/{company_eik}', [CompaniesController::class, 'show']);
                Route::patch('/company/update-status/{company}', [CompaniesController::class, 'changeCompanyStatus'])->name('company.status.change');
                Route::delete('/company/delete', [CompaniesController::class, 'delete'])->name('company.delete');


                /** All cities routes */
                Route::get('/languages', [LanguageController::class, 'index']);
                Route::post('/language/create', [LanguageController::class, 'create'])->name('language.create');
                Route::delete('/language/delete', [LanguageController::class, 'delete'])->name('language.delete');

            });

            /** -------------------------------------------- */
            /** End of routes available only to Super admins */
            /** -------------------------------------------- */

            Route::get('/job-categories', [JobCategoryController::class, 'index'])->name('job.categories.index');
            Route::get('/job-categories/create-view', [JobCategoryController::class, 'createCategoryView']);
            Route::get('/job-category/edit/{job_category_id}', [JobCategoryController::class, 'jobCategoryEdit'])->name('job.category.edit');

            Route::post('/job-categories/create-category', [JobCategoryController::class, 'createCategory'])->name('job.category.create');
            Route::delete('/job-categories/delete-category/{category}', [JobCategoryController::class, 'deleteCategory'])->name('job.category.delete');

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

