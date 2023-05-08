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
        Schema::create('paymentTypes', function (Blueprint $table) {
            $table->id();
            $table->string('type');   
            $table->integer('cardNumber');
            $table->date('expirationDate');
            $table->integer('cvv');
            $table->unsignedBigInteger('userId')
                ->references('id')
                ->on('user')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('paymentTypes');
    }
};
