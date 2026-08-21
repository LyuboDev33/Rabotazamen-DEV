<?php


namespace App\Services;

use App\Models\Backend\Company\Job;
use App\Models\City;
use App\Models\JobCategory;
use App\Models\JobRole;


class FiltersService
{



    /**
     * Returns an array of all job filters
     *
     * @return array[]
     */
    public function allFilters()
    {
        return [
            'jobCities' => $this->allCities(),
            'jobCategories' => $this->allCategories(),
            'jobRoles'      => $this->allJobRoles(),
        ];
    }


    /**
     *
     */
    public function queryBuilder() {}

    /**
     * Get all cities that have job postings.
     *
     * @return array[]
     */
    public function allCities()
    {
        $cities = City::query()
            ->whereIn(
                'id',
                Job::query()
                    ->whereNotNull('city_id')
                    ->select('city_id')
                    ->distinct()
            )
            ->get();

        return $cities;
    }

    /**
     * Return all job categories used by jobs.
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
            ->get();
    }

    /**
     * Return all job roles used by jobs.
     */
    public function allJobRoles()
    {
        return JobRole::query()
            ->whereIn(
                'id',
                Job::query()
                    ->whereNotNull('job_role_id')
                    ->select('job_role_id')
                    ->distinct()
            )
            ->get();
    }
}
