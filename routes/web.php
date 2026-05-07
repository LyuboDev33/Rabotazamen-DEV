<?php

use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Backend\SupportTicketController;
use App\Http\Controllers\Backend\CandidateController;
use App\Http\Controllers\Backend\Employer\JobsEmployerController;
use App\Http\Controllers\Backend\EmployerController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\GoogleAuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::fallback(function () {
    return Inertia::render('404');
});


Route::get('/auth/redirect/{access?}', [GoogleAuthController::class, 'index'])->name('google.auth.register');
Route::get('/auth/callback', [GoogleAuthController::class, 'redirectURL']);

Route::get('/', [FrontendController::class, 'home']);
Route::get('/about', [FrontendController::class, 'about']);
Route::get('/contact', [FrontendController::class, 'contact']);
Route::get('/blog', [FrontendController::class, 'blog']);
Route::get('/blog/{slug}', [FrontendController::class, 'blogShow']);

Route::get('/calculator', [FrontendController::class, 'calculator']);



Route::middleware(['auth', 'verified'])->group(function () {


    Route::get('/dashboard', function () {
        return Inertia::render('BackEnd/Dashboard');
    })->name('dashboard');

    /** ALL COMMON ROUTES FOR THE DASHBOARD (DOESN'T MATTER THE ACCESS TYPE) */

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

            Route::get('/cv-documents', [CandidateController::class, 'documentsCV']);
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
            Route::get('/jobs', [JobsEmployerController::class, 'index']);
            Route::get('/jobs/create', [JobsEmployerController::class, 'createView']);

            Route::post('/job/create', [JobsEmployerController::class, 'create'])->name('job.create');

        });
});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';
