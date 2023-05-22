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
            $table->decimal('price');
            $table->integer('stock')->nullable();
            $table->integer('rating')->nullable();
            $table->unsignedBigInteger('categoryId');
            $table->foreign('categoryId')
                ->references('id')
                ->on('categories')
                ->onDelete('cascade');
            $table->unsignedBigInteger('sellerId');
            $table->foreign('sellerId')
                ->references('id')
                ->on('sellers')
                ->onDelete('cascade');
            $table->unsignedBigInteger('imageId');
            $table->foreign('imageId')
                ->references('id')
                ->on('files')
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
