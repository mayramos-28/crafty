<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Costumer;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            SellerSeeder::class,
            CostumerSeeder::class,
            AddressSeeder::class,
            CategoriesSeeder::class,     
            OrderTypesSeeder::class,
            ProductFileSeeder::class,
            FileSeeder::class,
            ProductSeeder::class,
            
                   
        ]);
        
    }
}
