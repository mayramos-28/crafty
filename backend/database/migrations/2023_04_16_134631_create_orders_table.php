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
            $table->enum('state', ['pending', 'completed', 'cancelled']);     
            $table->timestamps();
            $table->unsignedBigInteger('userId')
                ->references('id')
                ->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('sellerId')
                ->references('id')            
                ->on('sellers')->onDelete('cascade');    
            $table->enum('type', ['sell', 'buy']);              
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
