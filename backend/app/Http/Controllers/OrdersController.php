<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\OrderDetail;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;

class OrdersController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $authUser = Auth::user();
        $where = [];
        if ($request->has('typeId')) {
            $where['typeId'] = $request->input('typeId');
        }
        if ($request->has('buyerId')) {
            if ($authUser->id != $request->input('buyerId')) {
                throw new \Exception('No tienes permisos para ver esta información');
            }
            $where['buyerId'] = $request->input('buyerId');
        }
        if ($request->has('sellerId')) {
            $where['sellerId'] = $request->input('sellerId');
        }


        return [
            'status' => 'success',
            'data' => Order::where($where)->with(OrderDetail::class)->get()
        ];
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $orderDetails = array_map(static function (array $detail) {
            return new OrderDetail($detail);
        }, request()->get('details'));

        $order = new Order([
            'userId' => $request->get('userId'),
            'sellerId' => $request->get('sellerId'),
            'type' => $request->get('type'),
            'date' => $request->get('date'),
            'total' => $request->get('total'),
            'invoiceNumber' => $request->get('invoiceNumber'),
            'ShippingAddress' => $request->get('ShippingAddress'),
            'details' => new OrderDetail($request->get('details')),
        ]);


        $order->save();
        $order->details()->saveMany($orderDetails);

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
        if (!$order) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'No se encontró la orden'
                ],
                404
            );
        }
        
        $order->update($request->all());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Orden actualizada correctamente',
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