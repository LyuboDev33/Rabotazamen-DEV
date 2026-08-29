<?php

use App\Models\City;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Str;
use Inertia\Inertia;




Route::prefix('admin/api')
    ->middleware(['auth'])
    ->group(function () {

        Route::get('/cities', function () {

            DB::statement('SET FOREIGN_KEY_CHECKS=0;');

            $regions = Http::get('https://bgpostcode.com/api/v1/regions')->json();

            City::truncate();

            foreach ($regions as $region) {

                $cities = Http::get(
                    "https://bgpostcode.com/api/v1/regions/{$region['id']}/city"
                )->json();

                foreach ($cities as $city) {

                    City::create([
                        'city_name' => $city['name'],
                        'city_slug' => Str::slug($city['name'])
                    ]);
                }
            }

            return redirect(route('dashboard'));
        });
    });
