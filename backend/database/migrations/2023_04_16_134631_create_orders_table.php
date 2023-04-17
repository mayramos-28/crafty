<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();            
            $table->timestamps();
            $table->unsignedBigInteger('costumerId')
                ->references('id')
                ->on('costumers')->onDelete('cascade');
            $table->unsignedBigInteger('sellerId')
                ->references('id')            
                ->on('sellers')->onDelete('cascade');    
            $table->unsignedBigInteger('TypeId')
                ->references('id')
                ->on('order_types')->onDelete('cascade');
            $table->date('date');
            $table->integer('total');
            $table->integer('invoiceNumber');
            $table->string('ShippingAddress');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
