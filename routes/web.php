<?php

use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Backend\ApplicationsController;
use App\Http\Controllers\Backend\CandidateController;
use App\Http\Controllers\Backend\Employer\JobsEmployerController;
use App\Http\Controllers\Backend\EmployerController;
use App\Http\Controllers\Backend\SupportTicketController;
use App\Http\Controllers\Frontend\WorkController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\GoogleAuthController;
use App\Http\Controllers\OnlinePaymentsController;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Inertia\Inertia;

Route::fallback(function () {
    return Inertia::render('404');
});



Route::get('/auth/redirect/{access?}',  [GoogleAuthController::class, 'index'])->name('google.auth.register');
Route::get('/auth/callback',            [GoogleAuthController::class, 'redirectURL']);

Route::get('/',                 [FrontendController::class, 'home']);
Route::get('/about',            [FrontendController::class, 'about']);
Route::get('/contact',          [FrontendController::class, 'contact']);
Route::get('/blog',             [FrontendController::class, 'blog']);
Route::get('/blog/{slug}',      [FrontendController::class, 'blogShow']);

Route::get('/calculator',       [FrontendController::class, 'calculator']);
Route::get('/services',         [FrontendController::class, 'services']);
Route::get('/learning',         [FrontendController::class, 'learning']);

Route::get('/platform/employer', [FrontendController::class, 'employer']);
Route::get('/platform/candidate',[FrontendController::class, 'candidate']);

Route::get('/candidates', [WorkController::class, 'allCandidates'])->name('candidates.all');
Route::get('/candidate/{id}', [WorkController::class, 'user'])->name('user.show');

Route::prefix('/jobs')->group(function () {
    Route::get('/', [WorkController::class, 'index'])->name('find-work.index');
    Route::get('/show/{id}', [WorkController::class, 'show'])->name('find-work.show');
    Route::post('/application-apply/{job}/{candidate}', [ApplicationsController::class, 'apply'])->name('application.apply');
});

Route::prefix('/companies')->group(function () {
    Route::get('/', [WorkController::class, 'companies'])->name('comapnies.index');
    Route::get('/show/{id}', [WorkController::class, 'companyShow'])->name('comapnies.show');
});

Route::post('/reviews/company/{company}', [WorkController::class, 'storeCompanyReview'])->name('reviews.company.store');
Route::post('/reviews/candidate/{candidate}', [WorkController::class, 'storeCandidateReview'])->name('reviews.candidate.store');


Route::middleware(['auth', 'verified'])->group(function () {


    Route::get('/dashboard', function () {
        return Inertia::render('BackEnd/Dashboard');
    })->name('dashboard');

    /** ALL COMMON ROUTES FOR THE DASHBOARD (DOESN'T MATTER THE ACCESS TYPE) */

    /** Subscriptions routes */
    Route::get('/subscriptions', [OnlinePaymentsController::class, 'subscriptions'])->name('subscription.index');

    Route::post('/subscription/create/{price_id}/{plan}', [OnlinePaymentsController::class, 'createSubscription'])->name('subscription.create');
    Route::get('/subscription/verify', [OnlinePaymentsController::class, 'checkout'])->name('subscription.verify');
    Route::post('/subscription/cancel', [OnlinePaymentsController::class, 'cancelSubscription'])->name('cancel.subscription');

    Route::get('/subscription/fail', [OnlinePaymentsController::class, 'fail'])->name('subscription.fail');


    /** Support Tickets */
    Route::get('/support/tickets', [SupportTicketController::class,  'index'])->name('user.tickets');
    Route::get('/support/tickets/{ticket_id}', [SupportTicketController::class,  'show'])->name('tickets.show');


    Route::get('/support/ticket/create-ticket', [SupportTicketController::class,  'createTicketView']);
    Route::post('/support/tickets/create', [SupportTicketController::class,  'create'])->name('ticket.create');
    Route::post('/support/message/reply', [SupportTicketController::class,  'reply'])->name('ticket.reply');


    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    /** END OF ALL COMMON ROUTES FOR THE DASHBOARD (DOESN'T MATTER THE ACCESS TYPE) */


    /** All routes related to candidates */
    /** CANDIDATE MIDDLEWARE  */
    Route::middleware('candidate')
        ->prefix('dashboard/candidate')
        ->group(function () {

            Route::get('/cv-documents', [CandidateController::class, 'documentsCV'])->name('candidate.profile');
            Route::patch('/populate-candidate', [CandidateController::class, 'populateCandidate'])->name('populate.candidate');

            /** Work experience  */
            Route::post('/work-experience/create', [CandidateController::class, 'workExperienceCreate'])->name('work.experience.create');
            Route::patch('/work-experience/update', [CandidateController::class, 'workExperienceUpdate'])->name('work.experience.update');
            Route::delete('/work-experience/delete', [CandidateController::class, 'workExperienceDelete'])->name('work.experience.delete');

            /** Education */
            Route::post('/education/create', [CandidateController::class, 'educationCreate'])->name('education.create');
            Route::patch('/education/update', [CandidateController::class, 'educationUpdate'])->name('education.update');
            Route::delete('/education/delete', [CandidateController::class, 'educationDelete'])->name('education.delete');

            /** Upload and delete CV */
            Route::post('/upload-cv', [CandidateController::class, 'uploadCV'])->name('upload.cv');
            Route::delete('/detele-cv', [CandidateController::class, 'deleteCV'])->name('delete.cv');
        });
    /** END OF CANDIDATE MIDDLEWARE  */


    Route::middleware('employer')
        ->prefix('dashboard/employer')
        ->group(function () {

            /** All company routes */
            Route::get('/company-details', [EmployerController::class, 'company']);
            Route::post('/company-details', [EmployerController::class, 'store'])->name('employer.store');
            Route::put('/company-details/{company}', [EmployerController::class, 'update'])->name('employer.update');

            /** All jobs routes */
            Route::prefix('/jobs')->group(function () {
                Route::get('/',                             [JobsEmployerController::class, 'index'])->name('jobs.index');
                Route::get('/create',                       [JobsEmployerController::class, 'createView']);
                Route::post('/create',                      [JobsEmployerController::class, 'create'])->name('job.create');

                Route::get('/job-roles/category/{category}', [JobsEmployerController::class, 'getRolesByCategory'])->name('job.roles.by.category');

                Route::get('/edit/{reference_number}',      [JobsEmployerController::class, 'show'])->name('job.edit');
                Route::put('/edit/{reference_number}',      [JobsEmployerController::class, 'update'])->name('job.update');

                Route::put('/change-job-status/{reference_number}',[JobsEmployerController::class, 'changeStatus'])->name('job.change.status');

                Route::delete('/delete',                    [JobsEmployerController::class, 'delete'])->name('job.delete');
            });

            Route::prefix('/applications')->group(function () {
                Route::get('/show/{job_id}', [ApplicationsController::class, 'applicants'])->name('applications.show');
            });

        });
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
require __DIR__ . '/api.php';
