<?php

namespace Database\Seeders;

use App\Models\Costumer;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CostumerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {    
        $users = [
            [
                'name' => 'Sofía García',
                'email' => 'sofia.garcia@gmail.com',
                'phone' => '123456789',
                'genero' => 'Femenino',
                'interests' => 'Deportes'               
            ],
            [
                'name' => 'Diego Rodríguez',
                'email' => ' diego.rodriguez@hotmail.com',
                'phone' => '123456789',
                'genero' => 'Masculino',
                'interests' => 'Deportes'
             
            ],
            [
                'name' => 'Valentina Torres',
                'email' => 'valentina.torres@yahoo.com',
                'phone' => '123456789',
                'genero' => 'Femenino',
                'interests' => 'Moda'

               
            ],
            [
                'name' => 'Juan Hernández',
                'email' => 'juan.hernandez@gmail.com',
                'phone' => '123456789',
                'genero' => 'Masculino',
                'interests' => 'Viajar'
              
            ],
            [
                'name' => 'Mariana Flores',
                'email' => 'mariana.flores@hotmail.com',
                'phone' => '123456789',
                'genero' => 'Femenino',
                'interests' => 'Viajar'
                
            ],
        ];

        foreach ($users as $data) {
            $user = new User();
            $user->name = $data['name'];
            $user->email = $data['email'];
            $user->password = password_hash('123456', PASSWORD_BCRYPT);
            $user->save();

            $costumer = new Costumer();
            $costumer->phone = $data['phone'];
            $costumer->genero = $data['genero'];
            $costumer->interests = $data['interests'];
            $costumer->userId = $user->id;
            $costumer->save();
        }
    }
}
 