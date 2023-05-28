<?php

namespace App\Http\Controllers;

use App\Models\CartItems;
use App\Models\ShoppingCarts;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;


class CartShoppingController extends Controller

{
    public function index(Request $request)
    {
        $where[] = ['userId', $request->get('userId')];

        $shoppingCart = ShoppingCarts::where($where)->with('cartItems')->get();

        return response()->json(
            [
                'status' => 'success',
                'data' => $shoppingCart[0] ?? null
            ],
            200
        );
    }

    public function store(Request $request)
    {
        $shoppingCart = new ShoppingCarts([
            'userId' =>  $request->get('userId')
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
        $shppingCartid = $request->get('id');
        $shoppingCart = ShoppingCarts::find($shppingCartid);

        if (!$shoppingCart) {
            $shoppingCart =  new ShoppingCarts(['userId' => $request->get('userId')]);
            $shoppingCart->save();
        }

        $cartItems = $request->get('cart_items');
        array_walk(
            $cartItems,
            static function ($cartItem) use ($shoppingCart) {

                $item = isset($cartItem['id'])
                    ? CartItems::find($cartItem['id'])
                    : new CartItems(['shopping_carts_id' => $shoppingCart->id]);


                $item->quantity = $cartItem['quantity'];
                $item->productId = $cartItem['productId'];
                $item->name = $cartItem['name'];
                $item->price = $cartItem['price'];

                $item->save();
            }

        );


        [$shoppingCart] = ShoppingCarts::where('id', $shoppingCart->id)->with('cartItems')->get();


        return response()->json(
            [
                'status' => 'success',
                'message' => 'Carrito actualizado correctamente',
                'data' => $shoppingCart
            ]
        );
    }
}
