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
        Schema::create('sellers', function (Blueprint $table) {
            $table->id();
            $table->string('bussnessId');
            $table->string('bussnessName');
            $table->string('bussnessType');        
            $table->string('bussnessPhone');
            $table->string('bussnessEmail');
            $table->string('bussnessWebsite');
            $table->string('bussnessLogo')->nullable();
            $table->text('bussnessDescription');
            $table->unsignedBigInteger('userId')
                ->references('id')
                ->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sellers');
    }
};
