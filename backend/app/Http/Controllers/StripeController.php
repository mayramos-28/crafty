<?php

namespace App\Http\Controllers;

use App\Models\Address;
use App\Models\Order;
use App\Models\ShoppingCarts;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Response;

class StripeController extends Controller

{
    public function process(Request $request)
    {
        // payment_intent=pi_3NCm62GLE1977v8x0ObpIoll
        // payment_intent_client_secret=pi_3NCm62GLE1977v8x0ObpIoll_secret_niZjPtHkBSZrgi1Wkv9nJ6x6Q



        $stripe = new \Stripe\StripeClient(getenv('STRIPE_SECRET_KEY'));
        $intent = $stripe->paymentIntents->retrieve(
            request()->get('payment_intent'),
            []
        );

        $paymentIsSucess = $intent->status == 'succeeded';

        if() {
            
        }

        return response()->json([
            'status' => 'success',
            'data' => $intent
        ]);
    }

    public function createPayment(Request $request)
    {
        \Stripe\Stripe::setApiKey(getenv('STRIPE_SECRET_KEY'));


        $order = Order::find($request->get('orderId'));
        $paymentIntent = \Stripe\PaymentIntent::create([
            'amount' => $order->total * 100,
            'currency' => 'eur',
            'automatic_payment_methods' => [
                'enabled' => true,

            ],
            // 'confirm' => true,
            // 'return_url' => getenv('APP_URL') . '/api/stripe/payment/process',
            // 'next_action' => [
            //     'type' => 'redirect_to_url',
            //     'redirect_to_url' => [
            //         'return_url' => getenv('APP_URL') . '/api/stripe/payment/process',
            //     ],
            // ],
        ]);



        return response()->json([
            'status' => 'success',
            'data' => ['clientSecret' => $paymentIntent->client_secret]
        ]);
    }
}
