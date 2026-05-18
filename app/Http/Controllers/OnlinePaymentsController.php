<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OnlinePaymentsController extends Controller
{

    /** All plans inside the platform */
    private static $paymentPlans = [
        'basic',
        'standart',
        'premium'
    ];

    /** Show the dashboard subscription */
    public function subscriptions()
    {
        return Inertia::render('BackEnd/Subscription');
    }

    /** If a payment fails, return this view */
    public function fail()
    {
        return Inertia::render('BackEnd/Subscriptions/Fail');
    }


    /** URL redirection after card input
     * @param Request $request
     * @return RedirectResponse
     */
    public function checkout(Request $request)
    {
        $checkoutSession = $request->user()->stripe()->checkout->sessions->retrieve($request->get('session_id'));

        if ($checkoutSession->payment_status !== 'paid') {
            return redirect(route('subscription.fail'));
        }

        return view('checkout.success', ['checkoutSession' => $checkoutSession]);
    }

    /** Create a subscription for a user
     *
     * @param Request $request
     * @param string  $priceId
     * @param string  $plan
     * @return RedirectResponse
     */
    public function createSubscription(Request $request, $priceId, $plan)
    {

        $validId = static::validateId($priceId);
        $validatePlan = static::validatePlan($plan);

        if (!$validId || !$validatePlan) {
            return redirect(route('subscription.fail'));
        }

        if (static::hasActiveSubscription($request->user())) {
            Inertia::flash([
                'subscriptionAlreadyExists' =>  'Вече имате активен абонамент в нашата система!'
            ]);
            return back();
        }

        return $request->user()
            ->newSubscription($plan, $priceId)
            ->checkout([
                'success_url' => route('subscription.verify') . '?session_id={CHECKOUT_SESSION_ID}',
                'cancel_url' => route('subscription.fail'),
            ]);
    }

    /** Validate the Stripe Price Id's coming from the Front End
     *
     * @param string $priceId
     * @return bool
     */
    private static function validateId($priceId): bool
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET'));
        $prices = $stripe->prices->all();

        $allStripePriceIds = [];

        foreach ($prices->data as $price) {
            $allStripePriceIds[] = $price->id;
        }

        if (!in_array($priceId, $allStripePriceIds)) {
            return false;
        }

        return true;
    }

    /** Validate the Stripe Price Id's coming from the Front End
     *
     * @param string $plan
     * @return bool
     */
    private  static function validatePlan($plan): bool
    {
        $allPaymentPlans = static::$paymentPlans;

        if (!in_array($plan, $allPaymentPlans)) {
            return false;
        }

        return true;
    }

    /**
     * Check if user already has an active subscription
     *
     * @param \App\Models\User $user
     * @return bool
     */
    private static function hasActiveSubscription($user)
    {
        foreach (self::$paymentPlans as $plan) {

            if ($user->subscribed($plan)) {
                return true;
            }
        }

        return false;
    }
}
