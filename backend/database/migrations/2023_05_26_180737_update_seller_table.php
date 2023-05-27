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
        //hacer update de la tabla seller para renombrar el campo de una columna
        Schema::table('sellers', function (Blueprint $table) {
            $table->renameColumn('bussnessId', 'businessId'); 
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
