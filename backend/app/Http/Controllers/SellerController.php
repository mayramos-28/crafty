<?php

namespace App\Http\Controllers;

use App\Models\Seller;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class SellerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $sellers = Seller::all();
        return response()->json(
            [
                'status' => 'success',
                'data' => $sellers
            ],
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $seller = new Seller([
            'businessId' => $request->get('businessId'),
            'businessType' => $request->get('businessType'),
            'businessPhone' => $request->get('businessPhone'),

            'businessWebsite' => $request->get('businessWebsite'),
            'businessLogo' => $request->get('businessLogo'),
            'businessDescription' => $request->get('businessDescription'),
            'userId' => $request->get('userId'),

        ]);
        $seller->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Vendedor creado correctamente',
                'data' => $seller
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $seller = Seller::find($id);
        if (!$seller) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Vendedor no encontrado'
                ],
                404
            );
        }
        return response()->json(
            [
                'status' => 'success',
                'data' => $seller
            ],
            200
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $seller = Seller::find($id);
        if (!$seller) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Vendedor no encontrado'
                ],
                404
            );
        }
        $seller->businessId = $request->get('businessId');
        $seller->businessType = $request->get('businessType');
        $seller->businessPhone = $request->get('businessPhone');

        $seller->businessWebsite = $request->get('businessWebsite');
        $seller->businessLogo = $request->get('businessLogo');
        $seller->businessDescription = $request->get('businessDescription');
        $seller->userId = $request->get('userId');
        $seller->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Vendedor actualizado correctamente',
                'data' => $seller
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $seller = Seller::find($id);
        if (!$seller) {
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Vendedor no encontrado'
                ],
                404
            );
        }
        $seller->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Vendedor eliminado correctamente'
            ],
            200
        );
    }
}
