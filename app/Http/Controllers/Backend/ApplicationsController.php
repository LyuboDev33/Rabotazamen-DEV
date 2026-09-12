<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Application;
use App\Models\Backend\Candidate;
use App\Models\Backend\Company\Job;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ApplicationsController extends Controller
{
    /**
     * Apply for a job.
     *
     * @param Request $request
     * @param Job $job
     * @param Candidate $candidate
     * @return RedirectResponse
     */
    public function apply(Request $request, Job $job, Candidate $candidate): RedirectResponse
    {
        $validated = $request->validate([
            'cv_id'   => ['required', 'integer', 'exists:candidate_cv,id'],
            'message' => ['nullable', 'string', 'max:2000'],
        ], [
            'cv_id.required' => 'Моля, изберете CV, с което желаете да кандидатствате.',
            'cv_id.integer'  => 'Избраното CV е невалидно.',
            'cv_id.exists'   => 'Избраното CV не съществува.',

            'message.string' => 'Съобщението трябва да бъде текст.',
            'message.max'    => 'Съобщението не може да бъде по-дълго от 2000 символа.',
        ]);



        $authenticatedCandidate = Auth::user()->candidate;

        if (!$authenticatedCandidate) {
            return back()->withErrors([
                'application' => 'Не беше намерен кандидатски профил.',
            ]);
        }

        /*
         * Make sure the candidate from the URL
         * is actually the authenticated candidate.
         */
        if ($authenticatedCandidate->id !== $candidate->id) {
            abort(403);
        }


        /*
         * Make sure the selected CV belongs
         * to the authenticated candidate.
         */
        $cv = $authenticatedCandidate->cvs()
            ->where('id', $validated['cv_id'])
            ->first();


        if (!$cv) {
            return back()->withErrors([
                'cv_id' => 'Избраното CV не принадлежи на вашия профил.',
            ]);
        }

        if (!$job->is_active) {
            return back()->withErrors([
                'application' => 'Тази обява вече не е активна.',
            ]);
        }

        if (now()->greaterThan($job->job_end_date)) {
            return back()->withErrors([
                'application' => 'Срокът за кандидатстване по тази обява е изтекъл.',
            ]);
        }

        $alreadyApplied = Application::query()
            ->where('candidate_id', $authenticatedCandidate->id)
            ->where('job_id', $job->id)
            ->exists();


        if ($alreadyApplied) {
            return back()->withErrors([
                'application' => 'Вече сте кандидатствали за тази позиция.',
            ]);
        }

        Application::create([
            'candidate_id'   => $authenticatedCandidate->id,
            'job_id'         => $job->id,
            'candidate_cv_id' => $cv->id,
            'message'        => $validated['message'] ?? null,
            'status'         => 'pending',
        ]);


        Inertia::flash([
            'successApplication' => 'Кандидатурата ви беше изпратена успешно.'
        ]);


        return back();
    }

    /**
     * Show all applicants for the job.
     *
     * @param int $jobId
     */
    public function applicants(int $jobId)
    {
        $job = Job::query()
            ->where('id', $jobId)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        $applications = Application::with([
            'candidate.user',
            'candidate.workExperience',
            'candidate.education',
            'candidateCv',
        ])
            ->where('job_id', $job->id)
            ->latest()
            ->get();

        return Inertia::render('BackEnd/Employer/Jobs/Candidates', [
            'job'          => $job,
            'applications' => $applications,
        ]);
    }
}
