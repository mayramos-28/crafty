<?php

namespace App\Http\Controllers;

use App\Models\Costumer;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class CostumerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $costumers = Costumer::all();
        return response()->json(
            [
                'status' => 'success',
                'data' => $costumers
            ],
            200
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       
            $costumer = new Costumer([
                'name' => $request->get('name'),        
                'phone' => $request->get('phone'),
                'genero' => $request->get('genero'),
                'interests' => $request->get('interests'),
                'userId' => $request->get('userId'),
            ]);
            $costumer->save();
            return response()->json(
                [
                    'status' => 'success',
                    'message' => 'Cliente creado correctamente',
                    'data' => $costumer
                ],200
            );
       
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $costumer = Costumer::find($id);
        if(!$costumer){
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Cliente no encontrado'
                ],
                400
            );
        }
       
        return response()->json(
            [
                'status' => 'success',
                'data' => $costumer
            ],
            200
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $costumer= Costumer::find($id);
        if(!$costumer){
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Cliente no encontrado'
                ],
                400
            );
        }
        $costumer->name = $request->get('name');
        $costumer->phone = $request->get('phone');
        $costumer->genero = $request->get('genero');
        $costumer->interests = $request->get('interests');
        $costumer->userId = $request->get('userId');
        $costumer->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Cliente actualizado correctamente',
                'data' => $costumer
            ],
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $id)
    {
        $costumer= Costumer::find($id);
        if(!$costumer){
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Cliente no encontrado'
                ],
                400
            );
        }
        $costumer->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Cliente eliminado correctamente',
                'data' => $costumer
            ],
            200
        );
        
    }
}
