<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $product = Product::all();
        return response()->json(
            [
                'status' => 'success',
                'data' => $product],200
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try{
                $product = new Product([
            'name' => $request->get('name'),
            'description' => $request->get('description'),
            'price' => $request->get('price'),
            'stock' => $request->get('stock'),
            'categoryId' => $request->get('categoryId'),
            'sellerId' => $request->get('sellerId'),
            'imageId' => $request->get('imageId'),
        ]);
        $product->save();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Producto creado correctamente',
                'data' => $product]
        );
        }catch(\Exception $e){
            return response()->json(
                [
                    'status' => 'error',                    
                    'message' => $e->getMessage()],200
            );
        }
    
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $productId)
    {
        $product = Product::find($productId);
        return response()->json(
            [
                'status' => 'success',
                'data' => $product],200
        );
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $productId)
    {
        $product = Product::find($productId);
        if(!$product){
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Product no encontrado'],404
            );
        }
        $product->name = $request->get('name');
        $product->description = $request->get('description');
        $product->price = $request->get('price');
        $product->stock = $request->get('stock');
        $product->categoryId = $request->get('categoryId');
        $product->sellerId = $request->get('sellerId');
        $product->imageId = $request->get('imageId');
        $product->save();

        return response()->json(
            [
                'status' => 'success',
                'message' => 'Producto actualizado correctamente',
                'data' => $product],200
        );
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $productId)
    {
        $product = Product::find($productId);
        if(!$product){
            return response()->json(
                [
                    'status' => 'error',
                    'message' => 'Producto no encontrado'],404
            );
        }
        $product->delete();
        return response()->json(
            [
                'status' => 'success',
                'message' => 'Producto eliminado correctamente'],200
        );
    }
}
