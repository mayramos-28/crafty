<?php

namespace Database\Seeders;

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
                            
            ],
            [
                'name' => 'Diego Rodríguez',
                'email' => ' diego.rodriguez@hotmail.com',
               
             
            ],
            [
                'name' => 'Valentina Torres',
                'email' => 'valentina.torres@yahoo.com',
             

               
            ],
            [
                'name' => 'Juan Hernández',
                'email' => 'juan.hernandez@gmail.com',
                
              
            ],
            [
                'name' => 'Mariana Flores',
                'email' => 'mariana.flores@hotmail.com',
                
                
            ],
        ];

        foreach ($users as $data) {
            $user = new User();
            $user->name = $data['name'];
            $user->email = $data['email'];
            $user->password = password_hash('123456', PASSWORD_BCRYPT);
            $user->save();

        }
    }
}
 