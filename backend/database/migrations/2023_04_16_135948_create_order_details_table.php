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
        Schema::create('order_details', function (Blueprint $table) {
            $table->unsignedBigInteger('OrderId');
            $table->foreign('OrderId')
                ->references('id')
                ->on('orders')->onDelete('cascade');

            $table->unsignedBigInteger('productId');
            $table->foreign('productId')
                ->references('id')
                ->on('products')->onDelete('cascade');

            $table->integer('quantity');
            $table->decimal('initePrice');
            $table->decimal('subTotal');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_details');
    }
};
