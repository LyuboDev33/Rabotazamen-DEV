<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Application;
use App\Models\Backend\Candidate;
use App\Models\Backend\Company;
use App\Models\Backend\Company\Job;
use App\Models\Review;
use App\Models\Role;
use App\Models\User;
use App\Services\JobFiltersService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class WorkController extends Controller
{

    public function __construct(
        private JobFiltersService $jobFiltersService
    ) {}

    /**
     * Find work index.
     *
     * @param Request $request
     */
    public function index(Request $request)
    {
        $cleanQuery = array_filter($request->query(), fn($value) => filled($value));


        if (count($cleanQuery) !== count($request->query())) {
            return redirect()->route('find-work.index', $cleanQuery);
        }

        $jobs = Job::with([
            'user',
            'category',
            'jobRole',
            'city',
            'languages',
            'publisher'
        ]);


        $jobs = $this->jobFiltersService->applyFilters($jobs, $request)->get();

        return Inertia::render('FrontEnd/Work/Index', [
            'jobs' => $jobs,
            'filters' => $this->jobFiltersService->allFilters($request)
        ]);
    }

    /**
     * Show the job.
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
            ->firstOrFail();

        $job->increment('number_of_views');

        $hasApplied = false;


        if (Auth::check()) {
            $candidate = Auth::user()->candidate;

            if ($candidate) {
                $hasApplied = Application::query()
                    ->where('candidate_id', $candidate->id)
                    ->where('job_id', $job->id)
                    ->exists();
            }
        }



        return Inertia::render('FrontEnd/Work/Show', [
            'job'        => $job,
            'hasApplied' => $hasApplied,
        ]);
    }

    /**
     * Show a candidate
     *
     *  @param int $id
     */
    public function user(int $id)
    {
        $candidate = Candidate::with([
            'user',
            'CVs',
            'workExperience',
            'education',
            'reviews.reviewerCandidate.user',
            'reviews.reviewerCompany'
        ])->where('user_id', $id)->first();

        $profilePic = User::select('profile_pic')
            ->where('id', $candidate->user_id)
            ->first();


        return Inertia::render('FrontEnd/Work/User', [
            'candidate'   => $candidate,
            'profileLogo'  => $profilePic->profile_pic
        ]);
    }

    /** Show all candidates */
    public function allCandidates()
    {
        $candidates = Candidate::with([
            'user',
            'CVs',
            'workExperience',
            'education'
        ])->get();

        return Inertia::render('FrontEnd/Work/UsersAll', [
            'allCandidates' => $candidates
        ]);
    }

    /** Show all the companies */
    public function companies()
    {
        $companies = Company::where('status', Company::STATUS_APPROVED)->get();

        return Inertia::render('FrontEnd/Work/CompaniesAll', [
            'companies' => $companies
        ]);
    }

    /**
     * Show company details.
     *
     * @param int $companyId
     * @return \Inertia\Response
     */
    public function companyShow($companyId)
    {
        $company = Company::with([
            'reviews.reviewerCandidate.user',
            'reviews.reviewerCompany'
        ])
            ->where('status', Company::STATUS_APPROVED)
            ->findOrFail($companyId);

        return Inertia::render('FrontEnd/Work/Company', [
            'company' => $company,
        ]);
    }

    /**
     * Store review for a company.
     *
     * @param Request $request
     * @param Company $company
     */
    public function storeCompanyReview(Request $request, Company $company)
    {
        $request->validate([
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'comment' => ['nullable', 'string', 'max:3000'],
        ]);

        try {
            $user = $request->user();

            if (!$user) {
                return back()->with('error', 'Трябва да сте влезли в профила си, за да оставите ревю.');
            }

            $isEmployer = $user->roles->contains('role_name', Role::EMPLOYER);
            $isCandidate = $user->roles->contains('role_name', Role::CANDIDATE);

            if ($isEmployer) {
                return back()->with('error', 'Фирма не може да оставя ревю на друга фирма.');
            }

            if (!$isCandidate) {
                return back()->with('error', 'Нямате право да оставяте ревю.');
            }

            $candidate = $user->candidate;

            if (!$candidate) {
                return back()->with('error', 'Не беше намерен кандидатски профил.');
            }

            Review::create([
                'reviewer_candidate_id' => $candidate->id,
                'reviewer_company_id' => null,
                'reviewed_candidate_id' => null,
                'reviewed_company_id' => $company->id,
                'rating' => $request->rating,
                'comment' => $request->comment,
                'is_approved' => Review::PENDING,
            ]);

            return back()->with('success', 'Ревюто беше изпратено успешно и очаква одобрение.');
        } catch (\Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }

    /**
     * Store review for a candidate.
     *
     * @param Request $request
     * @param Candidate $candidate
     */
    public function storeCandidateReview(Request $request, Candidate $candidate)
    {
        $request->validate([
            'rating' => ['required', 'integer', 'min:1', 'max:5'],
            'comment' => ['nullable', 'string', 'max:3000'],
        ]);

        try {
            $user = $request->user();

            if (!$user) {
                return back()->with('error', 'Трябва да сте влезли в профила си, за да оставите ревю.');
            }

            $isEmployer = $user->roles->contains('role_name', Role::EMPLOYER);
            $isCandidate = $user->roles->contains('role_name', Role::CANDIDATE);

            if (!$isEmployer && !$isCandidate) {
                return back()->with('error', 'Нямате право да оставяте ревю.');
            }

            $reviewerCandidateId = null;
            $reviewerCompanyId = null;

            if ($isCandidate) {
                $reviewerCandidate = $user->candidate;

                if (!$reviewerCandidate) {
                    return back()->with('error', 'Не беше намерен кандидатски профил.');
                }

                if ($reviewerCandidate->id === $candidate->id) {
                    return back()->with('error', 'Не можете да оставите ревю на себе си.');
                }

                $reviewerCandidateId = $reviewerCandidate->id;
            }

            if ($isEmployer) {
                $reviewerCompany = $user->companies()->first();

                if (!$reviewerCompany) {
                    return back()->with('error', 'Не беше намерен фирмен профил.');
                }

                $reviewerCompanyId = $reviewerCompany->id;
            }

            Review::create([
                'reviewer_candidate_id' => $reviewerCandidateId,
                'reviewer_company_id' => $reviewerCompanyId,
                'reviewed_candidate_id' => $candidate->id,
                'reviewed_company_id' => null,
                'rating' => $request->rating,
                'comment' => $request->comment,
                'is_approved' => Review::PENDING,
            ]);

            return back()->with('success', 'Ревюто беше изпратено успешно и очаква одобрение.');
        } catch (\Exception $exception) {
            return back()->with('error', $exception->getMessage());
        }
    }


}
