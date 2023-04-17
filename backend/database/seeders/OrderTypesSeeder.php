<?php

namespace Database\Seeders;

use App\Models\OrderType;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderTypesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    
        $typeSeller = new OrderType();
        $typeSeller->name = 'Purchase';
        $typeSeller->save();

        $typeBuyer = new OrderType();
        $typeBuyer->name = 'Sale';
        $typeBuyer->save();


    }
}
