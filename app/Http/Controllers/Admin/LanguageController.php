<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Language;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LanguageController extends Controller
{

    /** Return all languages view */
    public function index () {
        return Inertia::render('BackEnd/Admin/Language/Index', [
            'languages' => Language::get()
        ]);
    }

    /**
     * Create a language
     * @param Request
     * @return RedirectResponse
     */
    public function create(Request $request)
    {
        $request->validate([
            'language_name' => 'required|string|max:255|unique:languages,language_name'
        ], [
            'language_name.unique' => 'Този език вече е добавен!'
        ]);

        Language::create([
            'language_name' => $request->language_name
        ]);

        Inertia::flash([
            'successCreatingLanguage' => 'Езикът беше добавен успешно'
        ]);

        return back();
    }

    /**
     * Destroy a language
     * @param Request
     * @return RedirectResponse
     */
    public function delete(Request $request)
    {
        $language = Language::where('id', $request->languageId)->first();

        if (!$language) {
            Inertia::flash([
                'errorDeletingLanguage' => 'Упс... нещо се обърка! Този език не съществува!'
            ]);

            return back();
        }

        $language->delete();

        Inertia::flash([
            'successDeletingLanguage' => 'Езикът е изтрит успешно'
        ]);

        return back();
    }
}
