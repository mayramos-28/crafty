<?php

namespace App\Http\Controllers;

use App\Models\ProductFile;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class FileProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(string $id)
    {
        $file = ProductFile::find($id);
        return response()->redirectTo($file->attached);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
