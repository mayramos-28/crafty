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
        Schema::create('cart_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('productId');
            $table->foreign('productId')
                ->references('id')
                ->on('products')->onDelete('cascade');
            $table->unsignedBigInteger('shopping_cart_id');
            $table->foreign('shopping_cart_id')
                ->references('id')
                ->on('shopping_carts');
            $table->string('name');
            $table->decimal('price');
            $table->integer('quantity');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_items');
    }
};
