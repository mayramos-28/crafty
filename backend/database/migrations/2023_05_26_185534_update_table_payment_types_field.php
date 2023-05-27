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
        //MODIFICAR EL TIPO DE DATO DE UNA COLUMNA
        Schema::table('payment_types', function (Blueprint $table) {
            $table->string('cardNumber', 20)->change(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
