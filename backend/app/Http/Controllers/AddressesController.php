<?php

namespace App\Http\Controllers;

use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

use function GuzzleHttp\Promise\all;

class AddressesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $where = [];

        if ($request->has('userId') && $request->get('userId') != '') {
            $where['userId'] = $request->get('userId');
        }


        $address = Address::where($where)->get();
        return response()->json(
            [
                'status' => 'success',
                'data' => $address
            ],
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $address = new Address([
            'street' => $request->get('street'),
            'number' => $request->get('number'),
            'zipCode' => $request->get('zipCode'),
            'city' => $request->get('city'),
            'state' => $request->get('state'),
            'country' => $request->get('country'),
            'userId' => $request->get('userId'),
        ]);
        $address->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Direccion creada correctamente',
                'data' => $address
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(int $id)
    {
        $address = Address::find($id);
        return response()->json(
            [
                'status' => 'success',
                'data' => $address
            ],
            200
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $address = Address::find($id);
        $address->update($request->all());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Direccion actualizada correctamente',
                'data' => $address
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $address = Address::find($id);
        $address->delete();
    }
}
