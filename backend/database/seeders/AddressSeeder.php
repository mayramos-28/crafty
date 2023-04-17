<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $address = [

            [
                'street' => 'Plaza de Europa',
                'number' => 's/n',
                'city' => 'Xirivella',
                'state' => 'Valencia',
                'country' => ' España',
                'zipCode' => '46950',
                'userId' => '1'
                
            ],
            [
                'street' => 'Av. de Pius XII',
                'number' => '2',
                'city' => 'València',
                'state' => 'València',
                'country' => 'España',
                'zipCode' => '46009',
                'userId' => '3'
                
            ],

            [
                'street' => 'Carrer de Menéndez Pidal',
                'number' => '',
                'city' => 'València',
                'state' => 'València,',
                'country' => 'España',
                'zipCode' => '46009',
                'userId' => '2'
                
            ],
            [
                'street' => 'Plaça dels Pinazos',
                'number' => '5',
                'city' => 'València',
                'state' => 'València',
                'country' => 'España',
                'zipCode' => '46004',
                'userId' => '4'
               
            ],
            [
                'street' => 'Carrer del Monestir de Poblet',
                'number' => '46',
                'city' => 'València',
                'state' => 'València',
                'country' => 'España',
                'zipCode' => '46015 ',
                'userId' => '5'
                
            ] ,
            [
                'street' => 'Carrer de la Pau',
                'number' => '1',
                'city' => 'València',
                'state' => 'València',
                'country' => 'España',
                'zipCode' => '46001',
                'userId' => '6'
                
            ],
            
            [
                'street' => 'Passatge Dr. Bartual Moret',
                'number' => '4',
                'city' => 'València',
                'state' => 'València',
                'country' => 'España',
                'zipCode' => '46010',
                'userId' => '7'

            ],
            [
                'street' => 'Carrer de la Pau',
                'number' => '1',
                'city' => 'València',
                'state' => 'València',
                'country' => 'España',
                'zipCode' => '46001',
                'userId' => '8'

            ]
            
        ];


  
  
            foreach ($address as $data) {

      
                $address = new Address();
                $address->street = $data['street'];
                $address->number = $data['number'];
                $address->city = $data['city'];
                $address->state = $data['state'];
                $address->country = $data['country'];
                $address->zipCode = $data['zipCode'];
                $address->userId = $data['userId'];
                $address->save(); 
        
       
            
            
        }
    }
}
