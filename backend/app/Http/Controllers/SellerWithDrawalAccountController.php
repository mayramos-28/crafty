<?php

namespace App\Http\Controllers;

use App\Models\selleWithdrawalAccount;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class SellerWithDrawalAccountController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $where = [];
        if($request->has('sellerId') && $request->get('sellerId') != ''){
            $where[] = ['sellerId', '=', $request->get('sellerId')];
        }
        $sellerWithDrawalAccount = selleWithdrawalAccount::where($where)->get();
        return response()->json(
            [
                'status' => 'success',
                'data' => $sellerWithDrawalAccount
            ],
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $table->id();
        // $table->string('bankName');
        // $table->string('bankAccountNumber');
        // $table->string('bankaccountOwner');
        // $table->unsignedBigInteger('sellerId')
        //     ->references('id')
        //     ->on('sellers')->onDelete('cascade');
        // $table->timestamps();


        $sellerWithDrawalAccount = new selleWithdrawalAccount([
            'bankName' => $request->get('bankName'),
            'bankAccountNumber' => $request->get('bankAccountNumber'),
            'bankaccountOwner' => $request->get('bankaccountOwner'),
            'sellerId' => $request->get('sellerId'),
        ]);
        $sellerWithDrawalAccount->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Cuenta de retiro creada correctamente',
                'data' => $sellerWithDrawalAccount
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $sellerWithDrawalAccount = selleWithdrawalAccount::find($id);
       
        return response()->json(
            [
                'status' => 'success',
                'data' => $sellerWithDrawalAccount
            ],
            200
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $sellerWithDrawalAccount = selleWithdrawalAccount::find($id);
        if(!$sellerWithDrawalAccount){
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Cuenta no encontrada'
                ],
                404
            );
        }
        $sellerWithDrawalAccount->bankName = $request->get('bankName');
        $sellerWithDrawalAccount->bankAccountNumber = $request->get('bankAccountNumber');
        $sellerWithDrawalAccount->bankaccountOwner = $request->get('bankaccountOwner');
        $sellerWithDrawalAccount->sellerId = $request->get('sellerId');
        $sellerWithDrawalAccount->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Cuenta de retiro actualizada correctamente',
                'data' => $sellerWithDrawalAccount
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $sellerWithDrawalAccount = selleWithdrawalAccount::find($id);
        if(!$sellerWithDrawalAccount){
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Cuenta no encontrado'                
                ]
            );
        }
        $sellerWithDrawalAccount->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Cuenta eliminado correctamente'
            ]
        );
    }
}
