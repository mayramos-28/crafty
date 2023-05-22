<?php

namespace App\Http\Controllers;

use App\Models\CartItems;
use App\Models\ShoppingCarts;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class CartShopping extends Controller
{
    public function index()
    {
        $authUser = Auth::user();
        $shoppingCart = ShoppingCarts::where('userId', $authUser->id)->with(CartItems::class)->get();

        return response()->json(
            [
                'status' => 'success',
                'data' => $shoppingCart
            ],
            200
        );
    }

    public function store()
    {

        $authUser = Auth::user();

        $shoppingCart = new ShoppingCarts([
            'userId' => $authUser->id,

        ]);
        $shoppingCart->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Carrito creado correctamente',
                'data' => $shoppingCart
            ]
        );
    }
    public function update(Request $request)
    {
        $shppingCartid = $request->get('shoppingCartId');

        $shoppingCart = ShoppingCarts::find($shppingCartid);

        $shoppingCart->update([
            ...$request->all(),
            'cartItems' => array_map(
                static fn ($cartItem) =>  new CartItems($cartItem),
                $request->get('cartItems')
            )
        ]);

        $shoppingCart->save();


        return response()->json(
            [
                'status' => 'success',
                'message' => 'Carrito actualizado correctamente',
                'data' => $shoppingCart
            ]
        );
    }
}
