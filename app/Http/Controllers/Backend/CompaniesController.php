<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Company;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompaniesController extends Controller
{
    /** Retrieve all companies */
    public function index()
    {
        return Inertia::render('BackEnd/Admin/Company/Index', [
            'companies' => Company::get()
        ]);
    }

    /**
     * @param int $eik
     */
    public function show($company_eik)
    {

        $company = Company::where('company_eik', $company_eik)->first();

        /** If company not found */
        if (!$company) {
            return Inertia::render('Errors/NotFoundCompany');
        }

        return Inertia::render('BackEnd/Admin/Company/Show', [
            'company' => $company,
            'companyStatuses' => Company::COMPANY_STATUSES
        ]);
    }

    /** Change company status
     * @param Request $request
     * @return RedirectResponse
     */
    public function changeCompanyStatus(Request $request, Company $company)
    {
        $request->validate([
            'company_status' => ['required', 'string']
        ]);

        $status = $request->company_status;

        if (!in_array($status, Company::COMPANY_STATUSES)) {
            Inertia::flash([
                'errorCompanyStatus' => 'Упс... възникна проблем с промяната...'
            ]);
            return back();
        }

        $company->update([
            'status' => $status
        ]);

        Inertia::flash([
            'successCompanyUpdate' => 'Статусът беше обновен успешно!'
        ]);

        return back();
    }
}
