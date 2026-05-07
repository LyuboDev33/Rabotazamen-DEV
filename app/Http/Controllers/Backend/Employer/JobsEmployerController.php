<?php

namespace App\Http\Controllers\Backend\Employer;

use App\Http\Controllers\Controller;
use App\Models\Admin\Language;
use App\Models\City;
use App\Models\JobCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobsEmployerController extends Controller
{
    /** Show the jobs for the employer */
    public function index()
    {
        return Inertia::render('BackEnd/Employer/Jobs/Index');
    }

    /** Create a job view */
    public function createView()
    {
        return Inertia::render('BackEnd/Employer/Jobs/Create', [
            'cities' => City::get(),
            'industries' => JobCategory::get(),
            'languages' => Language::get()
        ]);
    }

    /**  Update job posting
     * @param  Request $request
     * @return RedirectResponse
     */
    public function create(Request $request) {

    }

    /**  Update job posting
     * @param  Request $request
     * @return RedirectResponse
     */
    public function update(Request $request) {}


    /**  Update job posting
     * @param  Request $request
     * @return RedirectResponse
     */
    public function delete(Request $request) {}
}
