<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Candidate;
use App\Models\Backend\Candidate\CandidateCV;
use App\Models\CandidateWorkExperience;
use App\Models\City;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CandidateController extends Controller
{
    /**
     * The view for the CV and profile form
     */
    public function documentsCV()
    {
        $candidate = Candidate::with([
            'CVs',
        ])->where('user_id', Auth::id())
            ->first();

        return Inertia::render('BackEnd/Candidate/DocumentsCV', [
            'cities' => City::get(),
            'candidate' => $candidate
        ]);
    }

    /** Add main fields for
     *
     */

    /** Add work experience
     *  @param Request $request
     * @return RedirectResponse
     */
    public function workExperienceCreate(Request $request)
    {
        $currentYear = (int) now()->year;

        $validated = $request->validate([
            'position'                 => ['required', 'string', 'max:255'],
            'company'                  => ['required', 'string', 'max:255'],
            'work_experience_location' => ['nullable', 'string', 'max:255'],
            'responsibilities'         => ['nullable', 'string', 'max:5000'],
            'current_position'         => ['nullable', 'boolean'],
            'year_start_from'          => ['required', 'integer', 'between:2000,' . $currentYear],
            'month_start_from'         => ['required', 'string'],

            'year_end_to'              => ['required', 'integer', 'between:2000,' . $currentYear],
            'month_end_to'             => ['required', 'string'],
        ], [
            'position.required'         => 'Длъжността е задължителна.',
            'company.required'          => 'Компанията е задължителна.',
            'year_start_from.required'  => 'Изберете година на започване.',
            'month_start_from.required' => 'Изберете месец на започване.',
            'year_end_to.required'      => 'Изберете година на приключване.',
            'month_end_to.required'     => 'Изберете месец на приключване.',
        ]);


        $isCurrent = (bool) ($validated['current_position'] ?? false);

        $startValue = $validated['year_start_from'] * 12 + $validated['month_start_from'];
        $endValue   = $validated['year_end_to']     * 12 + $validated['month_end_to'];

        if ($endValue < $startValue) {
            return back()->withErrors([
                'month_end_to' => 'Датата на приключване не може да бъде преди началната.',
            ]);
        }

        // Use model directly
        CandidateWorkExperience::create([
            'candidate_id'    => Auth::id(),
            'position'        => $validated['position'],
            'company'         => $validated['company'],
            'location'        => $validated['work_experience_location'] ?? null,
            'responsibilities' => $validated['responsibilities'] ?? null,

            'start_year'      => $validated['year_start_from'],
            'start_month'     => $validated['month_start_from'],

            'end_year'        => $validated['year_end_to'],
            'end_month'       => $validated['month_end_to'],

            'is_current'      => $isCurrent,
        ]);

        Inertia::flash([
            'successCreateWorkExperience' =>  'Успешно добавихте работен опит'
        ]);

        return back()->with('workExperienceCreated', 'Трудовият опит беше добавен успешно.');
    }

    /** Upload a CV to a candidate
     * @param Request @request
     * @return RedirectResponse
     */
    public function uploadCV(Request $request)
    {
        $request->validate([
            'cv_upload' => ['required', 'file', 'mimes:pdf', 'max:2048'],
        ], [
            'cv_upload.mimes' => 'Файлът трябва да е PDF',
            'cv_upload.uploaded' => 'Файлът не може да надвишава 2MB!',
        ]);

        $candidate = Auth::user()->candidate;

        if (!$candidate) {
            abort(403);
        }

        $file = $request->file('cv_upload');
        $fileName = preg_replace('/\s+/', '', $file->getClientOriginalName());

        $PDFfileExists = CandidateCV::where('file_name', $fileName)->first();

        if ($PDFfileExists) {
            Inertia::flash([
                'CVAlreadyExists' => 'Файл със същото име вече съществува във вашия профил!'
            ]);
            return back();
        }

        CandidateCV::create([
            'candidate_id' => $candidate->id,
            'file_name' => $fileName
        ]);

        $file->move(public_path('/assets/pdfs'), $fileName);

        Inertia::flash([
            'successUploadCV' => 'Успешно добавихте CV файл!'
        ]);

        return back();
    }


    /** Delete a CV
     * @param Request
     * @return RedirectResponse
     */
    public function deleteCV(Request $request)
    {

        $city = CandidateCV::where('id', $request->CVid)->first();

        if (!$city) {
            Inertia::flash([
                'errorDeletingCV' => 'Упс... нещо се обърка! Това CV не съществува!'
            ]);
            return back();
        }

        $city->delete();

        Inertia::flash([
            'successDeletingCV' => 'CV-то е изтрито успешно!'
        ]);

        return back();
    }
}
