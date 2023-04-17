<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $products = [

            [
                'name' => 'vestido',
                'description' => 'vestido de algodón',
                'price' => 50,
                'stock' => 10,
                'categoryId' => 1,
                'sellerId' => 1,
                'imageId' => 8,           
            ],
            [
                'name' => 'vestido',
                'description' => 'vestido de algodón',
                'price' => 50,
                'stock' => 10,
                'categoryId' => 1,
                'sellerId' => 1,
                'imageId' => 9,           
            ],
            [
                'name' => 'vestido',
                'description' => 'vestido de algodón',
                'price' => 50,
                'stock' => 10,
                'categoryId' => 1,
                'sellerId' => 1,
                'imageId' => 10,           
            ],
            [
                'name' => 'zapatos',
                'description' => 'zapatos de cuero',
                'price' => 90,
                'stock' => 2,
                'categoryId' => 2,
                'sellerId' => 2,
                'imageId' => 2,
            ],
            [
                'name' => 'jabon',
                'description' => 'jabon natural',
                'price' => 10,
                'stock' => 10,
                'categoryId' => 3,
                'sellerId' => 3,
                'imageId' => 4,
            ],
            [
                'name' => 'sudadera',
                'description' => 'sudadera de algodón',
                'price' => 30,
                'stock' => 5,
                'categoryId' => 1,
                'sellerId' => 4,
                'imageId' => 6,
            ],
            [
                'name' => 'adornos',
                'description' => 'adornos pequeños hechos con macrame',
                'price' => 20,
                'stock' => 10,
                'categoryId' => 4,
                'sellerId' => 5,
                'imageId' => 1,
            ],
            [
                'name' => 'zapatos',
                'description' => 'zapatos de cuero',
                'price' => 90,
                'stock' => 2,
                'categoryId' => 2,
                'sellerId' => 3,
                'imageId' => 3,
            ],
            [
                'name' => 'bolso',
                'description' => 'bolso de cuero',
                'price' => 100,
                'stock' => 2,
                'categoryId' => 2,
                'sellerId' => 2,
                'imageId' => 5,
            ],
            [
                'name' => 'camiseta',
                'description' => 'camiseta de algodón',
                'price' => 50,
                'stock' => 10,
                'categoryId' => 1,
                'sellerId' => 2,
                'imageId' => 11,
            ],
            [
                'name'=>'taza',
                'description'=>'taza de cerámica',
                'price'=>10,
                'stock'=>10,
                'categoryId'=>5,
                'sellerId'=>5,
                'imageId'=>7,
            ],
            [
                'name'=>'jersey',
                'description'=>'jersey de algodón',
                'price'=>90,
                'stock'=>5,
                'categoryId'=>1,
                'sellerId'=>4,
                'imageId'=>7,
            ]


        ];

        foreach ($products as $data) {
            $product = new Product();
            $product->name = $data['name'];
            $product->description = $data['description'];
            $product->price = $data['price'];
            $product->stock = $data['stock'];
            $product->categoryId = $data['categoryId'];
            $product->sellerId = $data['sellerId'];
            $product->imageId = $data['imageId'];
            $product->save();
            
        }
    }
}


            