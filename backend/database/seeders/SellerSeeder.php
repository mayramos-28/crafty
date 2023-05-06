<?php

namespace Database\Seeders;

use App\Models\Seller;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SellerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        

        $usersSeller = [

            [
                'name' => 'Manos Creativas',
                'email' => 'info@manoscreativas.com',
                'bussnessId' => 'B123456789',
                'bussnessType' => 'Artesanías decorativas',
                'bussnessPhone' => '(34) 622657888',
                'bussnessWebsite' => 'www.manoscreativas.com',
                'bussnessDescription' => 'En Manos Creativas ofrecemos una amplia variedad de productos artesanales únicos y originales, hechos a mano por nuestros expertos artesanos. Desde accesorios de moda hasta artículos para el hogar, en nuestra tienda encontrarás algo para cada gusto y ocasión.'
            ],
            [
                'name' => 'Artesanías del Mundo',
                'email' => 'ventas@artesaniasdelmundo.com',
                'bussnessId' => 'B123456789',
                'bussnessType' => 'Artesanías varias',
                'bussnessPhone' => '(34) 633657888',
                'bussnessWebsite' => 'www.artesaniasdelmundo.com',
                'bussnessDescription' => ' Artesanías del Mundo es una empresa dedicada a la venta de productos artesanales de todo el mundo. Nuestros productos son cuidadosamente seleccionados para ofrecer una amplia variedad de artículos únicos y de alta calidad. Visítanos en línea o en nuestra tienda física para descubrir las maravillas que el mundo tiene para ofrecer.'
            ],
            [
                'name' => 'El Taller del Artesano',
                'email' => 'contacto@eltallerdelartesano.com',
                'bussnessId' => 'B123456789',
                'bussnessType' => 'Artesanías decorativas',
                'bussnessPhone' => '(34) 644657888',
                'bussnessWebsite' => 'www.eltallerdelartesano.com',
                'bussnessDescription' => 'En El Taller del Artesano, nuestro objetivo es preservar la tradición y la artesanía, creando productos de alta calidad que reflejen la belleza y la originalidad de la cultura latinoamericana. Desde textiles hasta cerámica, ofrecemos una amplia variedad de productos artesanales para cada gusto y necesidad.'
            ],
            [
                'name' => 'ArteLatam',
                'email' => 'info@artelatam.com',
                'bussnessId' => 'B123456789',
                'bussnessType' => 'Artesanías decorativas',
                'bussnessPhone' => '(34) 688657888',
                'bussnessWebsite' => 'www.artelatam.com',
                'bussnessDescription' => 'Creaciones Manuales es una empresa dedicada a la creación de productos artesanales tradicionales de paises de latinoamericanos'
            ],
            
            [
                'name' => 'Hecho a Mano',
                'email' => 'contacto@hechoamano.com',
                'bussnessId' => 'B123456789',
                'bussnessType' => 'Artesanías decorativas',
                'bussnessPhone' => '(34) 699657888',
                'bussnessWebsite' => 'www.hechoamano.com',
                'bussnessDescription' => 'Artesanías de todo tipo'
            ]
        ];

        foreach ($usersSeller as $data) {
            $user = new User();
            $user->name = $data['name'];
            $user->email = $data['email'];
            $user->password = password_hash('123456', PASSWORD_BCRYPT);
            $user->save();

            $seller = new Seller();
            $seller->bussnessId = $data['bussnessId'];      
            $seller->bussnessType = $data['bussnessType'];
            $seller->bussnessPhone = $data['bussnessPhone'];
            $seller->bussnessWebsite = $data['bussnessWebsite'];
            $seller->bussnessDescription = $data['bussnessDescription'];
            $seller->userId = $user->id;
            $seller->save();
            
        }
    }
}
