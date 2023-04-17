<?php

namespace Database\Seeders;

use App\Models\ProductFile;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductFileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $images = [
            [
                'attached' =>  'https://img.freepik.com/foto-gratis/surtido-macrame-boho-interiores_23-2149072886.jpg?w=1480&t=st=1681661491~exp=1681662091~hmac=3303b1df936d424357e4d9fe5813f13494a36605c2d5c572770768f4b70089db',
                'description' => 'adornos pequeños hechos con macrame',
                
            ],
            [
                'attached' =>  'https://img.freepik.com/foto-gratis/cerca-zapatero-medir-cortar-cuero_171337-12272.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115',
                'description' => 'zapatos de cuero',
               
            ],
            [
                'attached' =>  'https://img.freepik.com/foto-gratis/hacer-calzado_1098-13645.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115',
                'description' => 'zapatos de cuero',
                
            ],

            [
                'attached' => 'https://img.freepik.com/foto-gratis/jabon-natural-spa_169016-3729.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115',
                'description' => 'jabon natural',
               
            ],

            [
                'attached' => 'https://img.freepik.com/foto-gratis/cerca-zapatero-trabajando-cuero-textil_171337-12258.jpg?w=1480&t=st=1681662060~exp=1681662660~hmac=6fb5d177e6ff0b697050bbede606c6864edf6e05c88fbde8339bffe48e0c1124',
                'description' => 'zapatos de cuero',
               
            ],
            [
                'attached' => 'https://img.freepik.com/psd-gratis/mockup-simple-sudadera-capucha-blanca-psd-ropa-hombre-comoda-deportiva_53876-98582.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115&semt=sph',
                'description' => 'mockup simple sudadera capucha blanca psd ropa hombre comoda deportiva',
                
            ],
            [
                'attached' => 'https://img.freepik.com/foto-gratis/moda-rapida-vs-moda-lenta-sostenible_23-2149133927.jpg?w=1480&t=st=1681662226~exp=1681662826~hmac=fda28d3448105262936de7a2cceefa5f2c5bcf81c138cd5c7e1de74cb7b54a62',
                'description' => 'jerseys de lana ecológica',
                
            ],
            [
                'attached' =>'https://img.freepik.com/fotos-premium/vestido-blusa-ropa-mujer-verde-colgado-percha-fila-coleccion-moda_320785-2250.jpg?w=740',
                 'description' => 'vestido',
               
            ],
            [
                'attached' => 'https://img.freepik.com/foto-gratis/bodegones-dicen-no-moda-rapida_23-2149669581.jpg?w=1480&t=st=1681662322~exp=1681662922~hmac=eeef6d0980a9256c4821b775fe7e07895f7cd321af4f502882d048df334d8587',
                'description' => 'Ropa de mujer',
               
            ],
            [
                'attached' => 'https://www.freepik.es/foto-gratis/cambio-armario-primavera-sobre-naturaleza-muerta_38103070.htm#page=2&query=ropa&position=40&from_view=search&track=sph',
                 'description' => 'Ropa de mujer',
                
            ],
            [
                'attached' =>'https://img.freepik.com/foto-gratis/mano-motociclista-tatuada-sostiene-colgantes-madera-camisetas-blancas-negras-blanco-algodon-fino-primera-calidad-aislado-blanco_346278-1811.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.1.842839798.1681570115&semt=sph',
                'description' => 'Camiseta de algodon ecológico',
               
            ],
            [
                'attached' => 'https://img.freepik.com/foto-gratis/mujer-vertiendo-te-taza-te_23-2148567568.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115&semt=ais',
                'description' => 'taza',
                
            ],
            [
                'attached' => 'https://img.freepik.com/foto-gratis/arreglo-objeto-hecho-mano-macrame_23-2149064431.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115&semt=ais',
                'description' => 'Decoración de macrame',
               
            ],
            [
                'attached' =>  'https://img.freepik.com/foto-gratis/bolsa-bano-vista-superior-mesa_23-2149879949.jpg?size=626&ext=jpg&uid=R83688733&ga=GA1.2.842839798.1681570115&semt=ais',
                'description' => 'bolsa de baño',
                
            ],
            

        ];

        foreach ($images as $field) {
            $file = new ProductFile();
            $file->attached = $field['attached'];
            $file->description = $field['description'];           
            $file->save();
        }
    }
}
