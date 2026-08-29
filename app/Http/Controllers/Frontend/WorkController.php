<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Candidate;
use App\Models\Backend\Company\Job;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkController extends Controller
{
    /** Find work index */
    public function index(Request $request)
    {
        $jobs = Job::with([
            'user',
            'category',
            'jobRole',
            'city',
            'languages',
            'publisher'
        ])->get();

        return Inertia::render('FrontEnd/Work/Index', [
            'jobs' => $jobs,
        ]);
    }

    /** Show the job
     *
     * @param int $id
     */
    public function show($id)
    {
        $job = Job::with([
            'user',
            'category',
            'jobRole',
            'city',
            'languages',
            'publisher'
        ])
        ->where('id', $id)
        ->first();

        $job->increment('number_of_views');


        return Inertia::render('FrontEnd/Work/Show', [
            'job' => $job
        ]);
    }

    /**
     * Show a candidate
     *  @param int $id
     */
    public function user(int $id)
    {

        $candidate = Candidate::with([
            'CVs',
            'workExperience',
            'education'
        ])->where('user_id', $id)->first();

        $profilePic = User::select('profile_pic')
            ->where('id', $candidate->user_id)
            ->first();



        return Inertia::render('FrontEnd/Work/User', [
            'candidate'   => $candidate,
            'profilePic'  => $profilePic->profile_pic
        ]);
    }
}
