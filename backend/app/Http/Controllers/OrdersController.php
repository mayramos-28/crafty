<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;


class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        
        $user = $request->get('userId');
        $where = ['userId' => $user]; 
        $order= Order::where( $where )->with('orderDetails')->orderBy('created_at', 'desc')->get();       

        return [
            'status' => 'success',
            'data' => $order
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
  

        $order = new Order([
            'userId' => $request->get('userId'),           
            'total' => $request->get('total'),
            'state' => $request->get('state'),
            'total'=> $request->get('total'),            
            'addressId' => $request->get('addressId'),
            
        ]);

        $details = $request->get('cartItems');
        //obtener el id de la orden creada
        $order->save();
       
        //guardar los detalles de la orden
        array_walk(
            $details,
            static function ($detail) use ($order) {
                $order->orderDetails()->save(
                    new OrderDetail([
                        'OrderId' => $order->id,
                        'productId' => $detail['productId'],
                        'name' => $detail['name'],
                        'quantity' => $detail['quantity'],
                        'price' => $detail['price']
                        
                    ])
                );
            }
        );

        
       [$order]= Order::where('id', $order->id)->with('orderDetails')->get();

        return response()->json(
            [
                'status' => 'success',
                'message' => 'Orden creada correctamente',
                'data' => $order
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $order = Order::find($id);
        return response()->json(
            [
                'status' => 'success',
                'data' => $order->load(OrderDetail::class)
            ],
            200
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $order = Order::find($id);
        $order->state = $request->get('state');
        $order->save();

        return response()->json(
            [
                'status' => 'success',
                'message' => 'Estado actualizado correctamente',
                'data' => $order
            ]
        );
    }

    public function updateState(Request $request, int $id){

        $order = Order::find($id);
        $order->state = $request->get('state');
        $order->save();

        return response()->json(
            [
                'status' => 'success',
                'message' => 'Estado actualizado correctamente',
                'data' => $order
            ]
        );

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $order = Order::find($id);
        if (!$order) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'No se encontró la orden'
                ],
                404
            );
        }
        $order->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Orden eliminada correctamente'
            ]
        );
    }
}
