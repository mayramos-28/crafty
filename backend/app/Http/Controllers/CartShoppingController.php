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

        $shoppingCart = ShoppingCarts::where($where)->with(CartItems::class)->get();

        return response()->json(
            [
                'status' => 'success',
                'data' => $shoppingCart
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

        $shoppingCart = ShoppingCarts::find($shppingCartid) ?? new ShoppingCarts();

        $shoppingCart->fill([
            ...$request->all(),
        ]);
        $shoppingCart->save();

        $cartItems = array_map(
            static function ($cartItem) use($shoppingCart) {
               $item =  new CartItems(
                     [
                          ...$cartItem,
                          'shopping_cart_id' => $shoppingCart->id
                     ]
               );
               return $item;
            } ,
            $request->get('cartItems')
        );
   

        return response()->json(
            [
                'status' => 'success',
                'message' => 'Carrito actualizado correctamente',
                'data' => $shoppingCart
            ]
        );
    }
}
