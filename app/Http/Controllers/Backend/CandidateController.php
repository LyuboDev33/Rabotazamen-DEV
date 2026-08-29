<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use App\Models\Backend\Candidate;
use App\Models\Backend\Candidate\CandidateCV;
use App\Models\Backend\Candidate\CandidateEducation;
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

        return Inertia::render('BackEnd/Candidate/DocumentsCV', [
            'cities' => City::get(),
            'candidate' => $candidate
        ]);
    }

    /** Update main candidate fields
     * @param Request $request
     * @return RedirectResponse
     */
    public function populateCandidate(Request $request)
    {
        $validated = $request->validate([
            'profile_picture'    => ['nullable', 'image', 'mimes:jpg,jpeg,png,svg', 'max:2048'],
            'professional_title' => ['nullable', 'string', 'max:255'],
            'phone'              => ['required', 'string', 'max:50'],
            'location'           => ['required', 'string', 'max:255'],
            'work_status'        => ['required', 'string', 'in:actively_looking,open_to_offers,not_looking'],
            'work_model'         => ['required', 'array', 'min:1'],
            'work_model.*'       => ['string', 'in:on_site,hybrid,remote'],
            'skills'             => ['required', 'array', 'min:1'],
            'skills.*'           => ['string'],
            'about_me'           => ['required', 'string'],

            'min_salary'         => ['required', 'integer', 'min:630', 'lte:max_salary'],
            'max_salary'         => ['required', 'integer', 'max:10000', 'gte:min_salary'],


            'years_experience'   => ['required', 'integer', 'between:1,20'],
            'seniority'          => ['required', 'string', 'in:junior,mid,team_leader,senior,principal,cto'],

        ], [
            'phone.required'       => 'Телефонът е задължителен.',
            'location.required'    => 'Локацията е задължителна.',
            'work_status.required' => 'Изберете в какъв период се намирате.',
            'work_model.required'  => 'Изберете поне един модел на работа.',
            'work_model.min'       => 'Изберете поне един модел на работа.',
            'skills.required'      => 'Изберете поне едно умение.',
            'skills.min'           => 'Изберете поне едно умение.',
            'about_me.required'    => 'Краткото представяне е задължително.',
            'profile_picture.image' => 'Файлът трябва да е изображение.',
            'profile_picture.mimes' => 'Файлът трябва да е JPG, JPEG, PNG или SVG.',
            'profile_picture.max'   => 'Файлът не може да е по-голям от 2MB.',
        ]);

        $candidate = Candidate::where('user_id', Auth::id())->firstOrFail();

        $profilePictureName = $candidate->profile_picture;


        if ($request->hasFile('profile_picture')) {
            $file = $request->file('profile_picture');
            $profilePictureName = time() . '_' . preg_replace('/\s+/', '', $file->getClientOriginalName());
            $file->move(public_path('/assets_dashboard/images/candidate/profile'), $profilePictureName);
        }

        $candidate->update([
            'professional_title' => $validated['professional_title'] ?? null,
            'phone'              => $validated['phone'],
            'location'           => $validated['location'],
            'work_status'        => $validated['work_status'],
            'work_model'         => $validated['work_model'],
            'min_salary'         => $validated['min_salary'],
            'max_salary'         => $validated['max_salary'],
            'years_experience'   => $validated['years_experience'],
            'seniority'          => $validated['seniority'],
            'skills'             => $validated['skills'],
            'about_me'           => $validated['about_me'],
        ]);

        Inertia::flash([
            'successUpdateCandidate' => 'Успешно обновихте профила си'
        ]);

        return back();
    }
    /** Private method to return all months
     * @return array
     */
    private static function monthsMap(): array
    {
        return [
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

        if (!$workExperience) {
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


    /** Add education
     *  @param Request $request
     * @return RedirectResponse
     */
    public function educationCreate(Request $request)
    {
        $currentYear = (int) now()->year;

        $validated = $request->validate([
            'institution'         => ['required', 'string', 'max:255'],
            'specialty'           => ['required', 'string', 'max:255'],
            'degree'              => ['required', 'string', 'max:255'],
            'certificate'         => ['nullable', 'file', 'mimes:jpg,jpeg,png', 'max:2048'],
            'currently_studying'  => ['nullable'],
            'city'      => ['required', 'string'],
            'year_start_from'     => ['required', 'integer', 'between:2000,' . $currentYear],
            'month_start_from'    => ['required', 'string'],

            'year_end_to'         => ['required', 'integer', 'between:2000,' . $currentYear],
            'month_end_to'        => ['required', 'string'],
        ], [
            'institution.required'      => 'Учебното заведение е задължително.',
            'specialty.required'        => 'Специалността е задължителна.',
            'degree.required'           => 'Степента е задължителна.',
            'certificate.mimes'         => 'Файлът трябва да е JPG, JPEG или PNG.',
            'certificate.max'           => 'Файлът не може да е по-голям от 2MB.',
            'year_start_from.required'  => 'Изберете година на започване.',
            'month_start_from.required' => 'Изберете месец на започване.',
            'year_end_to.required'      => 'Изберете година на приключване.',
            'month_end_to.required'     => 'Изберете месец на приключване.',
        ]);

        $isCurrent = (bool) ($validated['currently_studying'] ?? false);


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
        $certificateName = null;
        if ($request->hasFile('certificate')) {
            $file = $request->file('certificate');
            $certificateName = time() . '_' . preg_replace('/\s+/', '', $file->getClientOriginalName());
            $file->move(public_path('/assets_dashboard/images/candidate/education'), $certificateName);
        }


        CandidateEducation::create([
            'candidate_id'       => Auth::id(),
            'institution'        => $validated['institution'],
            'specialty'          => $validated['specialty'],
            'degree'             => $validated['degree'],
            'city'               => $validated['city'],
            'certificate'        => $certificateName,

            'start_year'         => $validated['year_start_from'],
            'start_month'        => $validated['month_start_from'],

            'end_year'           => $validated['year_end_to'],
            'end_month'          => $validated['month_end_to'],

            'currently_studying' => $isCurrent,
        ]);

        Inertia::flash([
            'successCreateEducation' => 'Успешно добавихте образование'
        ]);

        return back();
    }

    /** Update education
     * @param Request $request
     * @return RedirectResponse
     */
    public function educationUpdate(Request $request)
    {
        $currentYear = (int) now()->year;

        $validated = $request->validate([
            'update_id'                 => ['required', 'integer', 'exists:candidate_education,id'],
            'update_institution'        => ['required', 'string', 'max:255'],
            'update_specialty'          => ['required', 'string', 'max:255'],
            'update_degree'             => ['required', 'string', 'max:255'],
            'update_city'               => ['required', 'string'],
            'update_certificate'        => ['nullable', 'file', 'mimes:jpg,jpeg,png', 'max:2048'],
            'update_currently_studying' => ['nullable'],
            'update_year_start_from'    => ['required', 'integer', 'between:2000,' . $currentYear],
            'update_month_start_from'   => ['required', 'string'],

            'update_year_end_to'        => ['required', 'integer', 'between:2000,' . $currentYear],
            'update_month_end_to'       => ['required', 'string'],
        ], [
            'update_institution.required'      => 'Учебното заведение е задължително.',
            'update_specialty.required'        => 'Специалността е задължителна.',
            'update_degree.required'           => 'Степента е задължителна.',
            'update_certificate.mimes'         => 'Файлът трябва да е JPG, JPEG или PNG.',
            'update_certificate.max'           => 'Файлът не може да е по-голям от 2MB.',
            'update_year_start_from.required'  => 'Изберете година на започване.',
            'update_month_start_from.required' => 'Изберете месец на започване.',
            'update_year_end_to.required'      => 'Изберете година на приключване.',
            'update_month_end_to.required'     => 'Изберете месец на приключване.',
        ]);

        $isCurrent = (bool) ($validated['update_currently_studying'] ?? false);


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


        $education = CandidateEducation::findOrFail($validated['update_id']);

        if ($education->candidate_id !== Auth::id()) {
            abort(403);
        }


        $certificateName = $education->certificate;

        if ($request->hasFile('update_certificate')) {

            if ($certificateName && file_exists(public_path('/assets_dashboard/images/candidate/education/' . $certificateName))) {
                unlink(public_path('/assets_dashboard/images/candidate/education/' . $certificateName));
            }

            $file = $request->file('update_certificate');
            $certificateName = time() . '_' . preg_replace('/\s+/', '', $file->getClientOriginalName());
            $file->move(public_path('/assets_dashboard/images/candidate/education'), $certificateName);
        }


        $education->update([
            'institution'        => $validated['update_institution'],
            'specialty'          => $validated['update_specialty'],
            'degree'             => $validated['update_degree'],
            'city'               => $validated['update_city'],
            'certificate'        => $certificateName,

            'start_year'         => $validated['update_year_start_from'],
            'start_month'        => $validated['update_month_start_from'],

            'end_year'           => $validated['update_year_end_to'],
            'end_month'          => $validated['update_month_end_to'],

            'currently_studying' => $isCurrent,
        ]);

        Inertia::flash([
            'successUpdateEducation' => 'Успешно обновихте образование'
        ]);

        return back();
    }

    /** Delete the education
     * @param Request
     * @return RedirectResponse
     */
    public function educationDelete(Request $request)
    {
        $education = CandidateEducation::where('id', $request->educationId)->first();

        if (!$education) {
            Inertia::flash([
                'errorEducationExist' => 'Упс... нещо се обърка!'
            ]);
            return back();
        }

        $education->delete();

        Inertia::flash([
            'successDeletionEducation' => 'Успешно изтриване на учебното заведение!'
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
