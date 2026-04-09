<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\JobCategory;
use App\Models\JobRole;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class JobCategoryController extends Controller
{
    /** The view for the Job categories */
    public function index()
    {
        $jobCategories = JobCategory::with('job_roles')->get();

        return Inertia::render('BackEnd/Admin/JobCategoriesAndRoles/JobCategories', [
            'jobCategories' => $jobCategories
        ]);
    }

    /** The view for creating a category */
    public function createCategoryView()
    {
        return Inertia::render('BackEnd/Admin/JobCategoriesAndRoles/CreateJobCategoriesView');
    }

    /** Edit the Job Category
     * @param int $job_category_id
     */
    public function jobCategoryEdit($job_category_id)
    {

        $jobCategory = JobCategory::with('job_roles')
            ->where('id', $job_category_id)
            ->first();

        if (!$jobCategory) {
            return Inertia::render('Errors/NotFoundJobCategory');
        }


        return Inertia::render('BackEnd/Admin/JobCategoriesAndRoles/JobCategoryEdit', [
            'jobCategory' => $jobCategory
        ]);
    }


    /** Create the category
     * @param Request $request
     * @return RedirectResponse
     */
    public function createCategory(Request $request)
    {

        $validated = $request->validate([
            'job_category_name' => ['required', 'regex:/^[\p{L}]+$/u', 'unique:job_categories,name']
        ], [
            'job_category_name.regex' => 'Позволение са само букви!',
            'job_category_name.unique' => 'Тази категория вече съществува'
        ]);

        $jobCategory = JobCategory::create([
            'name' => $validated['job_category_name']
        ]);

        Inertia::flash([
            'successCreating' => 'Категорията беше създадена успешно!'
        ]);

        return redirect()->route('job.category.edit', ['job_category_id' => $jobCategory->id])
            ->with('successCreating', 'Категорията беше създадена успешно!');
    }

    /**
     * Create a Job role
     * @param Request
     * @return RedirectResponse
     */
    public function createJobRole(Request $request, JobCategory $category)
    {
        $validated = $request->validate([
            'name_create_role' => ['required', 'regex:/^[\p{L}\s]+$/u', 'unique:job_roles,name'],
        ], [
            'name_create_role.required' => 'Името е задължително',
            'name_create_role.regex' => 'Позволени са само букви!',
            'name_create_role.unique' => 'Тази роля вече съществува'
        ]);

        JobRole::create([
            'name' => $validated['name_create_role'],
            'category_id' => $category->id
        ]);

        Inertia::flash([
            'successRoleCreation' => 'Ролята беше създадена успешно!'
        ]);

        return back();
    }


    /** Update a Job role
     * @param Request
     * @return RedirectResponse
     */
    public function updateJobRole(Request $request)
    {

        $validated = $request->validate([
            'name' => ['required', 'regex:/^[\p{L}\s]+$/u', 'unique:job_roles,name,' . $request->role_id],
        ], [
            'name.required' => 'Името е задължително',
            'name.regex' => 'Позволени са само букви!',
            'name.unique' => 'Тази роля вече съществува'
        ]);

        $role = JobRole::find($request->role_id);

        if (!$role) {
            Inertia::flash([
                'roleNonExistant' => 'Ролята не беше намерена'
            ]);

            return back();
        }

        $role->update([
            'name' => $validated['name']
        ]);

        Inertia::flash([
            'successRoleUpdating' => 'Ролята беше обновена успешно!'
        ]);

        return back();
    }

    /** Delete a Job role
     * @param Request
     * @return RedirectResponse
     */
    public function deleteJobRole(Request $request)
    {
        $role = JobRole::find($request->roleId);

        if (!$role) {
            Inertia::flash([
                'errorDeletingRole' => 'Ролята не беше намерена'
            ]);

            return back();
        }

        $role->delete();

        Inertia::flash([
            'successDeletingRole' => 'Ролята беше изтрита успешно!'
        ]);

        return back();
    }
}
