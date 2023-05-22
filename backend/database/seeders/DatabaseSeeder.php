<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
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
            UserSeeder::class,         
            AddressSeeder::class,
            FileSeeder::class,
            CategoriesSeeder::class, 
            ProductFileSeeder::class,
            ProductSeeder::class,    
        ]);
        
    }
}
