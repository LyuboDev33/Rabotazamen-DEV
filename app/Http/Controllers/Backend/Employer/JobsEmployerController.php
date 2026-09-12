<?php

namespace App\Http\Controllers\Backend\Employer;

use App\Http\Controllers\Controller;
use App\Http\Requests\Employer\CreateJobRequest;
use App\Http\Requests\Employer\UpdateJobRequest;
use App\Models\Admin\Language;
use App\Models\Backend\Company\Job;
use App\Models\City;
use App\Models\JobCategory;
use App\Models\JobRole;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class JobsEmployerController extends Controller
{
    /** Show the jobs for the employer */
    public function index()
    {
        $jobs = Job::with('languages')
            ->withCount('applications')
            ->where('user_id', Auth::id())
            ->get();

        return Inertia::render('BackEnd/Employer/Jobs/Index', [
            'jobs'  => $jobs
        ]);
    }

    /** Create a job view */
    public function createView()
    {
        $companies = Auth::user()
            ->companies()
            ->get();


        return Inertia::render('BackEnd/Employer/Jobs/Create', [
            'cities'     => City::get(),
            'industries' => JobCategory::get(),
            'languages'  => Language::get(),
            'companies'  => $companies
        ]);
    }

    /**
     * Show employer job for editing.
     *
     * @param string $reference_number
     */
    public function show(string $reference_number)
    {
        $job = Job::with(['languages', 'publisher'])
            ->where('reference_number', $reference_number)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        if ($job->user_id !== Auth::id()) {
            abort(403, 'Нямате достъп до тази обява.');
        }

        $jobRoles = JobRole::query()
            ->where('category_id', $job->category_id)
            ->orderBy('name')
            ->get();

        return Inertia::render('BackEnd/Employer/Jobs/Show', [
            'job'        => $job,
            'cities'     => City::orderBy('city_name')->get(),
            'industries' => JobCategory::orderBy('name')->get(),
            'languages'  => Language::orderBy('language_name')->get(),
            'jobRoles'   => $jobRoles,
        ]);
    }

    /**
     * Create job posting.
     *
     * @param CreateJobRequest $request
     * @return RedirectResponse
     */
    public function create(CreateJobRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        do {

            $referenceNumber = 'REF-'
                . now()->format('dmY')
                . '-'
                . random_int(1000, 9999);
        } while (
            Job::where('reference_number', $referenceNumber)->exists()
        );

        try {

            DB::transaction(function () use ($validated, $referenceNumber) {

                $job = Job::create([
                    'reference_number' => $referenceNumber,

                    'user_id' => Auth::id(),

                    'company_id' => $validated['company_id'],

                    'is_active' => true,

                    'title' => $validated['job_title'],

                    'description' => $validated['job_description'],

                    'category_id' => $validated['job_category'],

                    'job_role_id' => $validated['job_role'],

                    'min_salary' => $validated['job_min_salary'],

                    'max_salary' => $validated['job_max_salary'],

                    'number_of_views' => 0,

                    'work_type' => $validated['job_work_type'],

                    'employment_type' => $validated['job_employment_type'],

                    'position_level' => $validated['job_level'],

                    'remote_option' => $validated['job_remote_option'],

                    'city_id' => $validated['job_location'],

                    'address' => $validated['job_address'],

                    'annual_leave' => $validated['job_annual_leave'] ?? null,

                    'open_positions' => $validated['job_open_positions'],

                    'job_end_date' => now()->addDays(30),
                ]);

                $job->languages()->sync(
                    $validated['job_languages'] ?? []
                );
            });

            return redirect(route('jobs.index'))
                ->with(
                    'success',
                    'Обявата беше създадена успешно.'
                );
        } catch (\Throwable $e) {

            dd($e);

            return back()
                ->withInput()
                ->with(
                    'error',
                    'Възникна грешка при създаването на обявата. Моля, опитайте отново.'
                );
        }
    }


    /**
     * Update employer job posting.
     *
     * @param UpdateJobRequest $request
     * @param string $reference_number
     * @return RedirectResponse
     */
    public function update(UpdateJobRequest $request, string $reference_number): RedirectResponse
    {
        $validated = $request->validated();

        $job = Job::query()
            ->where('reference_number', $reference_number)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        try {

            DB::transaction(function () use ($job, $validated) {

                $job->update([
                    'title'            => $validated['job_title'],
                    'description'      => $validated['job_description'],
                    'category_id'      => $validated['job_category'],
                    'job_role_id'      => $validated['job_role'],
                    'min_salary'       => $validated['job_min_salary'],
                    'max_salary'       => $validated['job_max_salary'],
                    'work_type'        => $validated['job_work_type'],
                    'employment_type'  => $validated['job_employment_type'],
                    'position_level'   => $validated['job_level'],
                    'remote_option'    => $validated['job_remote_option'],
                    'city_id'          => $validated['job_location'],
                    'address'          => $validated['job_address'],
                    'annual_leave'     => $validated['job_annual_leave'] ?? null,
                    'open_positions'   => $validated['job_open_positions'],
                    'is_active'        => $validated['is_active'],
                ]);

                $job->languages()->sync(
                    $validated['job_languages'] ?? []
                );
            });

            return redirect()
                ->back()
                ->with(
                    'success',
                    'Обявата беше редактирана успешно.'
                );
        } catch (\Throwable $e) {

            dd($e);

            return back()
                ->withInput()
                ->with(
                    'error',
                    'Възникна грешка при редактирането на обявата.'
                );
        }
    }


    /**
     * Delete employer job posting.
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function delete(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'jobId' => ['required', 'integer', 'exists:jobs,id'],
        ], [
            'jobId.required' => 'Липсва идентификатор на обявата.',
            'jobId.integer'  => 'Невалиден идентификатор на обявата.',
            'jobId.exists'   => 'Обявата не съществува.',
        ]);

        $job = Job::query()
            ->where('id', $validated['jobId'])
            ->where('user_id', Auth::id())
            ->firstOrFail();

        $job->delete();

        return back()->with(
            'success',
            'Обявата беше изтрита успешно.'
        );
    }


    /**
     * Return job roles by category.
     *
     * @param int $category
     * @return JsonResponse
     */
    public function getRolesByCategory(int $category): JsonResponse
    {
        $roles = JobRole::query()
            ->where('category_id', $category)
            ->orderBy('name')
            ->get();

        return response()->json($roles);
    }



    /**
     * Change the active status of an employer job posting.
     *
     * @param Request $request
     * @param string $reference_number
     * @return RedirectResponse
     */
    public function changeStatus(Request $request, string $reference_number): RedirectResponse
    {
        $validated = $request->validate([
            'is_active' => ['required', 'boolean'],
        ]);

        $job = Job::query()
            ->where('reference_number', $reference_number)
            ->where('user_id', Auth::id())
            ->firstOrFail();

        $job->update([
            'is_active' => $validated['is_active'],
        ]);

        return back()->with(
            'success',
            'Статусът на обявата беше променен успешно.'
        );
    }
}
