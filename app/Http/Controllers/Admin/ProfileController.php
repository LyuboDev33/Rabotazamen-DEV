<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('BackEnd/Profile');
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request)
    {

        // Validate with a custom error bag for this form
        $validated = $request->validateWithBag('profile', [
            'first_name' => ['required', 'string', 'max:255'],
            'last_name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique('users')->ignore($request->user()->id)],
            'profile_pic' => ['nullable', 'image', 'mimes:jpeg,jpg,png', 'max:2048'],
            'phone' => ['max:50', 'required'],

        ], [
            'first_name.required' => 'Името е задължително',
            'last_name.required' => 'Името е задължително',
            'email.required' => 'Имейлът е задължителен',
            'email.email' => 'Моля въведете валиден имейл',
            'profile_pic.image' => 'Файлът трябва да е изображение',
            'profile_pic.mimes' => 'Файлът трябва да е jpg, jpeg или png',
            'uploaded' => 'Изображението не може да надвишава 2MB!',
            'phone.max' => 'Максимално разрешена дължина е 50 символа',

        ]);

        $user = $request->user();

        $user->first_name = $validated['first_name'];
        $user->last_name = $validated['last_name'];
        $user->email = $validated['email'];
        $user->phone = $validated['phone'];


        // Handle profile image if uploaded
        if ($request->hasFile('profile_pic')) {
            $file = $request->file('profile_pic');
            $filename = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path('assets_dashboard/images/profile_pics'), $filename);
            $user->profile_pic = $filename;
        }

        $user->save();

        Inertia::flash([
            'editSuccess' => 'Промените бяха запазени успешно!',
        ]);

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $user = $request->user();

        if ($user->password) {
            $request->validateWithBag('deleteAccountBag', [
                'password' => ['required', 'current_password'],
            ]);
        }

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    /**
     * Download the XML audit file
     */
    public function downloadStaticXML()
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));

        // Last month's date range
        // $startOfLastMonth = strtotime('first day of last month 00:00:00');
        // $endOfLastMonth   = strtotime('last day of last month 23:59:59');

        $successfulPayments = [];

        $transactions = $stripe->checkout->sessions->all([
            'limit'   => 100,
            // 'created' => [
            //     'gte' => $startOfLastMonth,
            //     'lte' => $endOfLastMonth,
            // ],
            'expand' => ['data.line_items', 'data.customer'],
        ]);


        foreach ($transactions->autoPagingIterator() as $transaction) {
            if ($transaction->payment_status === 'paid') {

                $dateTime = Carbon::createFromTimestamp($transaction->created, 'Europe/Sofia');

                $transaction->human_date = $dateTime->toDateString();
                $transaction->human_time = $dateTime->toTimeString();
                $transaction->list_items = $transaction->line_items->data ?? [];

                $successfulPayments[] = $transaction;
            }
        }

        $creationDate = date("Y-m-d");
        $month = date('m', strtotime('-1 month'));
        $year = date('Y');
        $vatPercent = 9;

        return response()
            ->view('documents', [
                'orders' => $successfulPayments,
                'creationDate' => $creationDate,
                'month' => $month,
                'year' => $year,
                'vatPercent' => $vatPercent,
            ])
            ->header('Content-Type', 'application/xml; charset=Windows-1251');
        // ->header('Content-Disposition', 'attachment; filename="Softex-audit.xml"'); // enable for download

    }
}
