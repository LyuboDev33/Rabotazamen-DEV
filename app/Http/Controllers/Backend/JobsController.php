<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\JobCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobsController extends Controller
{

    /** Get the job roles based on the chosen job category
     * @param Request @request
     * @return array
     */

    public function retrieveJobRoles(Request $request): array
    {
        $jobCategoryName = $request->company_industry;

        $jobCategory = JobCategory::with('job_roles')
            ->where('name', $jobCategoryName)
            ->first();

        if (!$jobCategory) {
            return [];
        }

        return [$jobCategory->job_roles];
    }

}
