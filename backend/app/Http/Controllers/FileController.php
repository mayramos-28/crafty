<?php

namespace App\Http\Controllers;

use App\Models\File;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class FileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $id)
    {
        $file = File::find($id);
        return response()->redirectTo($file->attached);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $data = $request->validate([
            'attached' => 'required',
            'description' => 'required',
        ]);


        $fileProduct = new File([
            'attached' => $data['attached'],
            'description' => $data['description'],
        ]);

        $fileProduct->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Archivo creado correctamente',
                'data' => $fileProduct
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $file = File::find($id);
        return response()->json(
            [
                'status' => 'success',
                'data' => $file
            ]
        );
    }

    /**
     * Display the specified resource.
     */
    public function print(int $id)
    {
        $file = File::find($id);
        return redirect($file->attached);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, int $id)
    {
        $file = File::find($id);
        $file->update($request->all());
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Archivo actualizado correctamente',
                'data' => $file
            ]
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $file = File::find($id);
        $file->delete();
    }
}
