<?php

namespace App\Services;

use App\Models\Backend\Company\Job;
use App\Models\City;
use App\Models\JobCategory;
use App\Models\JobRole;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class JobFiltersService
{
    /**
     * Apply filters to the jobs query.
     *
     * @param Builder $jobs
     * @param Request $request
     * @return Builder
     */
    public function applyFilters(Builder $jobs, Request $request): Builder
    {
        # Category filter
        if ($request->filled('category')) {
            $jobs->join('job_categories', 'job_categories.id', '=', 'jobs.category_id')
                ->where('job_categories.slug', $request->category);
        }
        # Filter by city
        if ($request->filled('city')) {
            $jobs->join('cities', 'cities.id', '=', 'jobs.city_id')
            ->where('cities.city_slug', $request->city);
        }

        # Filter by job role
        if($request->filled('job_role')) {
            $jobs->join('job_roles', 'job_roles.id', '=', 'jobs.job_role_id')
                    ->where('job_roles.slug', $request->job_role);
        }

        # Filter by min and max price
        if ($request->filled('min_salary')) {
            $jobs->where('min_salary', '>=', $request->min_salary);
        }

        if ($request->filled('max_salary')) {
            $jobs->where('max_salary', '<=', $request->max_salary);
        }

        if ($request->filled('min_salary') && $request->filled('max_salary')) {
            $jobs->where('min_salary', '>=', $request->min_salary)
                ->where('max_salary', '<=', $request->max_salary);
        }

        return $jobs;
    }

    /**
     * Return available filter options.
     *
     * Categories are always returned in full.
     * Cities and job roles are filtered by the selected category.
     *
     * @param Request $request
     * @return array
     */
    public function allFilters(Request $request): array
    {
        return [
            'jobCategories' => $this->allCategories(),
            'jobCities' => $this->allCities($request),
            'jobRoles' => $this->allJobRoles($request),
        ];
    }

    /**
     * Return all categories used by jobs.
     */
    public function allCategories()
    {
        return JobCategory::query()
            ->whereIn(
                'id',
                Job::query()
                    ->whereNotNull('category_id')
                    ->select('category_id')
                    ->distinct()
            )
            ->orderBy('name')
            ->get();
    }

    /**
     * Return cities used by jobs in the selected category.
     *
     * @param Request $request
     */
    public function allCities(Request $request)
    {
        $jobs = Job::query();

        if ($request->filled('category')) {
            $jobs->whereHas('category', function ($query) use ($request) {
                $query->where('slug', $request->category);
            });
        }

        return City::query()
            ->whereIn(
                'id',
                $jobs
                    ->whereNotNull('city_id')
                    ->select('city_id')
                    ->distinct()
            )
            ->orderBy('city_name')
            ->get();
    }

    /**
     * Return job roles used by jobs in the selected category.
     *
     * @param Request $request
     */
    public function allJobRoles(Request $request)
    {
        $jobs = Job::query();

        if ($request->filled('category')) {
            $jobs->whereHas('category', function ($query) use ($request) {
                $query->where('slug', $request->category);
            });
        }

        return JobRole::query()
            ->whereIn(
                'id',
                $jobs
                    ->whereNotNull('job_role_id')
                    ->select('job_role_id')
                    ->distinct()
            )
            ->orderBy('name')
            ->get();
    }

    /**
     * Create the link for the filters.
     *
     * @param Request $request
     * @return string
     */
    public function linkBuilder(Request $request): string
    {
        $query = array_filter($request->query(), function ($value) {
            return $value !== null && $value !== '';
        });

        return http_build_query($query);
    }
}
