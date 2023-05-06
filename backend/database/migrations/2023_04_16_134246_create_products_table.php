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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('description');       
            $table->integer('price');
            $table->integer('stock')->nullable();
            $table->integer('rating')->nullable();
            $table->unsignedBigInteger('categoryId')
            ->references('id')
            ->on('categories')
            ->onDelete('cascade');
            $table->unsignedBigInteger('sellerId')
            ->references('id')
            ->on('sellers')
            ->onDelete('cascade');
            $table->unsignedInteger('imageId')
            ->reference('product_files')
            ->on('id')
            ->onDelete('cascade');
            $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
