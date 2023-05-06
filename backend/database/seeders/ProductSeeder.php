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
        $faker = \Faker\Factory::create();

        $products = [

            [
                'name' => 'vestido',
                'description' => $faker->text(100),
                'price' => 50,
                'stock' => 10,
                'categoryId' => 1,
                'sellerId' => 1,
                'imageId' =>15 ,           
            ],
            [
                'name' => 'vestido',
                'description' => $faker->text(100),
                'price' => 50,
                'stock' => 10,
                'rating'=>3,
                'categoryId' => 1,
                'sellerId' => 1,
                'imageId' => 16,           
            ],
            [
                'name' => 'vestido',
                'description' =>$faker->text(100),
                'price' => 50,
                'stock' => 10,
                'categoryId' => 1,
                'sellerId' => 1,
                'imageId' => 17,           
            ],
            [
                'name' => 'zapatos',
                'description' => $faker->text(100),
                'price' => 90,
                'stock' => 2,
                'rating'=>3,
                'categoryId' => 2,
                'sellerId' => 2,
                'imageId' => 10,
            ],
            [
                'name' => 'jabon',
                'description' => $faker->text(100),
                'price' => 10,
                'stock' => 10,
                'categoryId' => 3,
                'sellerId' => 3,
                'imageId' => 11,
            ],
            [
                'name' => 'sudadera',
                'description' => $faker->text(100),
                'price' => 30,
                'stock' => 5,
                'categoryId' => 1,
                'sellerId' => 4,
                'imageId' => 13,
            ],
            [
                'name' => 'adornos',
                'description' => $faker->text(100),
                'price' => 20,
                'stock' => 10,
                'rating'=>4,
                'categoryId' => 4,
                'sellerId' => 5,
                'imageId' => 8,
            ],
            [
                'name' => 'zapatos',
                'description' => $faker->text(100),
                'price' => 90,
                'stock' => 2,
                'rating'=>4,
                'categoryId' => 2,
                'sellerId' => 3,
                'imageId' => 10,
            ],
            [
                'name' => 'bolso',
                'description' => $faker->text(100),
                'price' => 100,
                'stock' => 2,
                'rating'=>2,
                'categoryId' => 2,
                'sellerId' => 2,
                'imageId' => 12,
            ],
            [
                'name' => 'camiseta',
                'description' => $faker->text(100),
                'price' => 50,
                'stock' => 10,
                'categoryId' => 1,
                'sellerId' => 2,
                'imageId' => 18,
            ],
            [
                'name'=>'taza',
                'description'=>$faker->text(100),
                'price'=>10,
                'stock'=>10,
                'rating'=>2,
                'categoryId'=>5,
                'sellerId'=>5,
                'imageId'=>14,
            ],
            [
                'name'=>'jersey',
                'description'=>$faker->text(100),
                'price'=>90,
                'stock'=>5,
                'rating'=>4,
                'categoryId'=>1,
                'sellerId'=>4,
                'imageId'=>14,
            ]


        ];

        foreach ($products as $data) {
            $product = new Product();
            $product->name = $data['name'];
            $product->description = $data['description'];
            $product->price = $data['price'];
            $product->stock = $data['stock'];
            $product->rating = $data['rating'] ?? 0;
            $product->categoryId = $data['categoryId'] ;
            $product->sellerId = $data['sellerId'];
            $product->imageId = $data['imageId'];
            $product->save();
            
        }
    }
}


            