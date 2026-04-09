<?php

use App\Http\Controllers\Admin\ProfileController;
use App\Http\Controllers\Backend\SupportTicketController;
use App\Http\Controllers\Backend\CandidateController;
use App\Http\Controllers\FrontendController;
use App\Http\Controllers\GoogleAuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::fallback(function () {
    return Inertia::render('404');
});


Route::get('/auth/redirect/{access?}', [GoogleAuthController::class, 'index'])->name('google');
Route::get('/auth/callback', [GoogleAuthController::class, 'redirectURL']);

Route::get('/', [FrontendController::class, 'home']);
Route::get('/about', [FrontendController::class, 'about']);
Route::get('/contact', [FrontendController::class, 'contact']);
Route::get('/blog', [FrontendController::class, 'blog']);
Route::get('/blog/{slug}', [FrontendController::class, 'blogShow']);



Route::middleware('auth')->group(function () {


    Route::get('/dashboard', function () {
        return Inertia::render('BackEnd/Dashboard');
    })->name('dashboard');

    /** ALL COMMON ROUTES FOR THE DASHBOARD (DOESN'T MATTER THE ACCESS TYPE) */

       /** Support Tickets */
    Route::get('/support/tickets', [SupportTicketController::class,  'index'])->name('user.tickets');
    Route::get('/support/tickets/create-ticket', [SupportTicketController::class,  'createTicketView']);
    Route::post('/support/tickets/create', [SupportTicketController::class,  'create'])->name('ticket.create');


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
            Route::post('/cv-documents/create-or-update', [CandidateController::class, 'createOrUpdateCandidate'])
                    ->name('candidate.create.or.update');

    });
    /** END OF CANDIDATE MIDDLEWARE  */


    Route::middleware('employer')->group(function () {


    });



});

require __DIR__ . '/auth.php';
require __DIR__ . '/admin.php';

