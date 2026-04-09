<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CandidateController extends Controller
{
        /**
     * The view for the CV and profile form
     */
    public function documentsCV() {
        return Inertia::render('BackEnd/Candidate/DocumentsCV');
    }

    /** If candidate doesn't exist - create it. If he exists - update data.
     *  @param Request $request
     * @return RedirectResponse
     */
    public function createOrUpdateCandidate (Request $request) {

        

    }

}
