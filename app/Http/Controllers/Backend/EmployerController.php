<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Company;
use App\Models\City;
use App\Models\JobCategory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class EmployerController extends Controller
{
    /** Show the company details */
    public function company()
    {
        $user = Auth::user();

        $company = $user->companies()->first();

        return Inertia::render('BackEnd/Employer/Company', [
            'company' => $company,
            'cities' => City::get(),
            'jobCategories' => JobCategory::get()
        ]);
    }



    /**
     * @param Request $request
     * @return RedirectResponse
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'company_name' => ['required', 'string', 'max:255'],
            'company_eik' => ['required', 'string', 'max:50', 'unique:companies,company_eik'],
            'company_industry' => ['required', 'string', 'max:255'],
            'company_size' => ['required', 'string', 'max:100'],
            'company_location' => ['required', 'string', 'max:255'],
            'company_address' => ['required', 'string', 'max:500'],
            'company_website' => ['max:255'],

            'company_logo' => ['required', 'image', 'mimes:jpg,jpeg,png', 'max:2048'],
            'company_banner' => ['required', 'image', 'mimes:jpg,jpeg,png', 'max:4096'],

            'company_full_description' => ['required', 'string'],
            'company_benefits' => ['required'],
            'work_locations' => ['required'],
            'work_languages' => ['required']
        ], [
            'company_logo.uploaded' => 'Изображението не може да надвишава 2MB!',
            'company_logo.image' => 'Файлът трябва да е изображение jpg, jpeg или png',
            'company_logo.mimes' => 'Файлът трябва да е във формат jpg, jpeg или png',

            'company_banner.uploaded' => 'Изображението не може да надвишава 4MB!',
            'company_banner.image' => 'Файлът трябва да е изображение jpg, jpeg или png',
            'company_banner.mimes' => 'Файлът трябва да е във формат jpg, jpeg или png',
        ]);

        // upload files
        $logoFile = $request->file('company_logo');
        $logoName = time() . '_' . $logoFile->getClientOriginalName();
        $logoFile->move(public_path('/assets/images/company_profile_pictures'), $logoName);

        $bannerFile = $request->file('company_banner');
        $bannerName = time() . '_' . $bannerFile->getClientOriginalName();
        $bannerFile->move(public_path('/assets/images/company_banners'), $bannerName);

        $validated['company_logo'] = $logoName;
        $validated['company_banner'] = $bannerName;
        $validated['status'] = Company::STATUS_PENDING;

        $company = Company::create($validated);

           Inertia::flash([
            'companyCreate' => 'Заявката ви беше изпратена успешно!'
        ]);

        Auth::user()->companies()->attach($company->id);

        return back();
    }

    /**
     * @param Request $request
     * @param Company $company
     * @return RedirectResponse
     */
    public function update(Request $request, Company $company)
    {
        $validated = $request->validate([
            'company_name' => ['required', 'string', 'max:255'],
            'company_eik' => ['required', 'string', 'max:50', 'unique:companies,company_eik,' . $company->id],
            'company_industry' => ['required', 'string', 'max:255'],
            'company_size' => ['required', 'string', 'max:100'],
            'company_location' => ['required', 'string', 'max:255'],
            'company_address' => ['required', 'string', 'max:500'],
            'company_website' => ['max:255'],

            'company_logo' => ['image', 'mimes:jpg,jpeg,png', 'max:2048'],
            'company_banner' => ['nullable', 'image', 'mimes:jpg,jpeg,png', 'max:4096'],

            'company_full_description' => ['required', 'string'],
            'company_benefits' => ['required'],
            'work_locations' => ['required'],
            'work_languages' => ['required']
        ], [
            'company_logo.uploaded' => 'Изображението не може да надвишава 2MB!',
            'company_logo.image' => 'Файлът трябва да е изображение jpg, jpeg или png',
            'company_logo.mimes' => 'Файлът трябва да е във формат jpg, jpeg или png',

            'company_banner.uploaded' => 'Изображението не може да надвишава 4MB!',
            'company_banner.image' => 'Файлът трябва да е изображение jpg, jpeg или png',
            'company_banner.mimes' => 'Файлът трябва да е във формат jpg, jpeg или png',
        ]);

        if ($request->hasFile('company_logo')) {
            $logoFile = $request->file('company_logo');
            $logoName = time() . '_' . $logoFile->getClientOriginalName();
            $logoFile->move(public_path('/assets/images/company_profile_pictures'), $logoName);

            $validated['company_logo'] = $logoName;
        }

        if ($request->hasFile('company_banner')) {
            $bannerFile = $request->file('company_banner');
            $bannerName = time() . '_' . $bannerFile->getClientOriginalName();
            $bannerFile->move(public_path('/assets/images/company_banners'), $bannerName);

            $validated['company_banner'] = $bannerName;
        }

        Inertia::flash([
            'companyUpdate' => 'Данните бяха запазени успешно!'
        ]);

        $company->update($validated);

        return back();
    }


    
}
