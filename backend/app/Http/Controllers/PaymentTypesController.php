<?php

namespace App\Http\Controllers;

use App\Models\PaymentTypes;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class PaymentTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $where = [];
        if($request->has('userId') && $request->get('userId') != ''){
            $where[] = ['userId', '=', $request->get('userId')];
        }
        $paymentTypes = PaymentTypes::where($where)->get();
        return response()->json(
            [
                'status' => 'success',
                'data' => $paymentTypes
            ],
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {.
        $paymentTypes = new PaymentTypes([
            'type' => $request->get('type'),
            'cardNumber' => $request->get('cardNumber'),
            'expirationDate' => $request->get('expirationDate'),
            'cvv' => $request->get('cvv'),
            'userId' => $request->get('userId'),
        ]);
        $paymentTypes->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Método de pago creado correctamente',
                'data' => $paymentTypes
            ]
        );
        
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $paymentTypes = PaymentTypes::find($id);
        return response()->json(
            [
                'status' => 'success',
                'data' => $paymentTypes
            ],
            200
        );
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $paymentTypes = PaymentTypes::find($id);
        if(!$paymentTypes){
           return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Método de pago no encontrado',
                
                ]
            );
        }
        $paymentTypes->type = $request->get('type');
        $paymentTypes->cardNumber = $request->get('cardNumber');
        $paymentTypes->expirationDate = $request->get('expirationDate');
        $paymentTypes->cvv = $request->get('cvv');
        $paymentTypes->userId = $request->get('userId');
        $paymentTypes->save();

        return response()->json(
            [
                'status' => 'success',
                'message' => 'Método de pago actualizado correctamente',
                'data' => $paymentTypes
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $paymentTypes = PaymentTypes::find($id);
        if(!$paymentTypes){
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Método de pago no encontrado'                
                ]
            );
        }
        $paymentTypes->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Método de pago eliminado correctamente'
            ]
        );

    }
}
