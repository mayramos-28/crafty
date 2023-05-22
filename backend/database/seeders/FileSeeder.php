<?php

namespace Database\Seeders;

use App\Models\File;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $images = [
            [
                'attached' => 'https://img.freepik.com/foto-gratis/trabajo-maquina-coser_144627-41364.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115'
,                'description' => 'maquina de coser'
            ],
            [
                'attached' => 'https://img.freepik.com/foto-gratis/hacer-calzado_1098-13645.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115',
                'description' => 'hacer calzado'
            ],
            [
                'attached' => 'https://img.freepik.com/foto-gratis/hombre-estudio-crea-articulos-cuero_1157-33207.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115&semt=ais',
                'description' => 'hombre en estudio'
            ],
            [
                'attached' => 'https://img.freepik.com/foto-gratis/disposicion-plana-elementos-esenciales-trabajo-cuentas_23-2148815797.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115&semt=ais',
                'description' => 'disposicion de elementos'
            ],
            [
                'attached' => 'https://img.freepik.com/foto-gratis/surtido-macrame-boho-interiores_23-2149072888.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115&semt=ais',
                'description' => 'macrame'
            ],
            [
                'attached' => 'https://img.freepik.com/foto-gratis/dibujo-habilidades-bricolaje-hecho-mano-artesanal_53876-125030.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.1.842839798.1681570115',
                'description' => 'dibujo habilidades'
            ],

        ];

        foreach ($images as $image) {
            
            $file = new File();
            $file->attached = $image['attached'];     
            $file->description = $image['description'];                   
            $file->save();
        }
    }
}
