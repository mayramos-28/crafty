<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Ropa',
                'description' => 'Ropa de hombre, mujer y niños creada mediante procesos manuales y artesanales.',
                'imageId' => 1         
            ],
            [
                'name'=>'zapatos',
                'description'=>'Calzado hecho a mano con técnicas tradicionales y materiales naturales de alta calidad.',
                'imageId' => 2
            ],
            [
                'name' => 'Bolsos',
                'description' => 'Bolsos hechos a mano con técnicas tradicionales y materiales naturales de alta calidad.',
                'imageId' => 3
            ],
            [
                'name' => 'Accesorios',
                'description' => 'Piezas hechas a mano con técnicas tradicionales y materiales naturales de alta calidad, como joyas, cinturones y bufandas.',
                'imageId' => 4
            ],
            
            [
                'name' => 'Decoración',
                'description' => 'Objetos hechos a mano con técnicas tradicionales y materiales naturales de alta calidad, como cerámica, tejidos y tallados en madera..',
                'imageId' => 5
            ],
            [
                'name'=>'Higiene Personal',
                'description'=>'Productos hechos a mano con ingredientes naturales y técnicas tradicionales, como jabones, cremas y aceites esenciales.',
                'imageId' => 6
            ],
            [
                'name' => 'otros',
                'description' => 'Imagenes para la web.',
                'imageId' => 7
            ]

         
            
        ];

        foreach ($categories as $field) {
                $category = new Category();
                $category->name = $field['name'];
                $category->description = $field['description'];
                $category->imageId = $field['imageId'];
                $category->save();
        }
    }
}
