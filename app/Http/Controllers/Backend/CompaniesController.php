<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CompaniesController extends Controller
{
    /** Retrieve all companies */
    public function index () {
        return Inertia::render('BackEnd/Admin/Company/Index', [
            'companies' => Company::get()
        ]);
    }

    /**
     * @param int @eik
     */
    public function show ($company_eik) {

        $company = Company::where('company_eik', $company_eik)->first();

        /** If company not found */
        if(!$company) {
            return Inertia::render('Errors/NotFoundCompany');
        }

        return Inertia::render('BackEnd/Admin/Company/Show', [
            'company' => $company
        ]);
    }

    /**  */
}
