<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\City;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CityController extends Controller
{
    /** Show all the cities */
    public function index() {
        return Inertia::render('BackEnd/Admin/City/Index', [
            'cities' => City::get()
        ]);
    }

    /** Create a city
     * @param Request
     * @return RedirectResponse
     */
      public function store(Request $request)
    {
        $request->validate([
            'city_name' => 'required|string|max:255|unique:cities,city_name'
        ], [
            'city_name.unique' => 'Този град вече е добавен!'
        ]);

        City::create([
            'city_name' => $request->city_name
        ]);

        Inertia::flash([
            'successCreatingCity' => 'Градът беше добавен успешно'
        ]) ;

        return back();
    }

     /** Destroy a city
     * @param Request
     * @return RedirectResponse
     */
    public function destroy(Request $request)
    {

        $city = City::where('id', $request->cityId)->first();

        if(!$city) {
            Inertia::flash([
                'errorDeletingCity' => 'Упс... нещо се обърка! Този град не съществува!'
            ]);
            return back();
        }

        $city->delete();

        Inertia::flash([
            'successDeletingCity' => 'Градът е изтрит успешно'
        ]);

        return back();
    }



}
