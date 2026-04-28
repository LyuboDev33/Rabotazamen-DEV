<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Candidate;
use App\Models\Backend\Candidate\CandidateCV;
use App\Models\Backend\Candidate\CandidateWorkExperience;
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
            'workExperience',
            'education'
        ])->where('user_id', Auth::id())
            ->first();

        dd($candidate);

        return Inertia::render('BackEnd/Candidate/DocumentsCV', [
            'cities' => City::get(),
            'candidate' => $candidate
        ]);
    }

    /** Add main fields for
    *
    */

     /** Private method to return all months
     * @return array
     */
     private static function monthsMap (): array {
        return  $monthsMap = [
            'Януари' => 'January',
            'Февруари' => 'February',
            'Март' => 'March',
            'Април' => 'April',
            'Май' => 'May',
            'Юни' => 'June',
            'Юли' => 'July',
            'Август' => 'August',
            'Септември' => 'September',
            'Октомври' => 'October',
            'Ноември' => 'November',
            'Декември' => 'December',
        ];
     }

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
            'work_experience_location' => ['required', 'nullable', 'string', 'max:255'],
            'responsibilities'         => ['required', 'nullable', 'string'],
            'current_position'         => ['nullable'],
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


        $monthsMap = static::monthsMap();

        $startMonthEn = $monthsMap[$validated['month_start_from']] ?? null;
        $endMonthEn   = $monthsMap[$validated['month_end_to']] ?? null;

        $startTimestamp = strtotime($validated['year_start_from'] . ' ' . $startMonthEn);
        $endTimestamp   = strtotime($validated['year_end_to'] . ' ' . $endMonthEn);


        if ($endTimestamp < $startTimestamp) {
            return back()->withErrors([
                'month_end_to' => 'Датата на приключване не може да бъде преди годината на започване.',
            ]);
        }

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

        return back();
    }

    /** Update the work experience
     * @param Request $request
     * @return RedirectResponse
     */
    public function workExperienceUpdate(Request $request)
    {

        $workExperience = CandidateWorkExperience::where('id', $request->update_id)->firstOrFail();

        if(!$workExperience) {
            abort(404, 'Записът не беше намерен');
        }

        $currentYear = (int) now()->year;

        $validated = $request->validate([
            'update_id'                       => ['required', 'integer', 'exists:candidate_work_experiences,id'],
            'update_position'                 => ['required', 'string', 'max:255'],
            'update_company'                  => ['required', 'string', 'max:255'],
            'update_work_experience_location' => ['required', 'nullable', 'string', 'max:255'],
            'update_responsibilities'         => ['required', 'nullable', 'string'],
            'update_is_current'               => ['nullable'],
            'update_year_start_from'          => ['integer', 'between:2000,' . $currentYear],
            'update_month_start_from'         => ['required', 'string'],

            'update_year_end_to'              => ['integer', 'between:2000,' . $currentYear],
            'update_month_end_to'             => ['string'],
        ], [
            'update_position.required'         => 'Длъжността е задължителна.',
            'update_company.required'          => 'Компанията е задължителна.',
            'update_year_start_from.required'  => 'Изберете година на започване.',
            'update_month_start_from.required' => 'Изберете месец на започване.',
            'update_year_end_to.required'      => 'Изберете година на приключване.',
            'update_month_end_to.required'     => 'Изберете месец на приключване.',
        ]);

        $isCurrent = (bool) ($validated['update_is_current'] ?? false);


        $monthsMap = static::monthsMap();

        $startMonthEn = $monthsMap[$validated['update_month_start_from']] ?? null;
        $endMonthEn   = $monthsMap[$validated['update_month_end_to']] ?? null;

        $startTimestamp = strtotime($validated['update_year_start_from'] . ' ' . $startMonthEn);
        $endTimestamp   = strtotime($validated['update_year_end_to'] . ' ' . $endMonthEn);




        if ($endTimestamp < $startTimestamp) {
            return back()->withErrors([
                'update_month_end_to' => 'Датата на приключване не може да бъде преди годината на започване.',
            ]);
        }


        $workExperience->update([
            'position'        => $validated['update_position'],
            'company'         => $validated['update_company'],
            'location'        => $validated['update_work_experience_location'] ?? null,
            'responsibilities' => $validated['update_responsibilities'] ?? null,

            'start_year'      => $validated['update_year_start_from'],
            'start_month'     => $validated['update_month_start_from'],

            'end_year'        => $validated['update_year_end_to'],
            'end_month'       => $validated['update_month_end_to'],

            'is_current'      => $isCurrent,
        ]);

        Inertia::flash([
            'successUpdateWorkExperience' =>  'Промените бяха запазени'
        ]);

        return back();
    }

    /** Delete the Work Experience
     * @param Request $request
     * @return RedirectResponse
     */
    public function workExperienceDelete(Request $request)
    {
        $workExpId = $request->WorkExpId;
        $workExp = CandidateWorkExperience::where('id', $workExpId)->first();

        if (!$workExp) {
            Inertia::flash([
                'failedWorkExperience' => 'Упссс... нещо се обърка!'
            ]);
            return back();
        }

        $workExp->delete();

        Inertia::flash([
            'successDeletionWorkExperience' => 'Работното място беше изтрито успешно!'
        ]);

        return back();
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
