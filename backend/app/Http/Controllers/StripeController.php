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
            request()->get('paymentIntent'),
            []
        );

        $paymentIsSucess = $intent->status === 'succeeded';

        if (!$paymentIsSucess) {
            return response()->json([
                'status' => 'error',
                'data' => [
                    'intent' => $intent,
                ]
            ]);
        }
        //cambio el estado de la orden que se acaba de pagar
        $orderId = $intent->metadata->orderId;
        $order = Order::find($orderId);
        $order->state = 'pending';
        $order->save();

        //elimino los items del carrito de compras del usuario que acaba de pagar
        $shoppingCart = ShoppingCarts::where('userId', $order->userId)->first();       
        $cartItems = $shoppingCart->cartItems;
        foreach ($cartItems as $cartItem) {
            $cartItem->delete();
        }

        return response()->json([
            'status' => 'success',
            'data' => [
                'intent' => $intent,
                'order' => $order
            ]
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
            'metadata' => [
                'orderId' => $order->id,
            ]

        ]);

        return response()->json([
            'status' => 'success',
            'data' => ['clientSecret' => $paymentIntent->client_secret]
        ]);
    }
}
