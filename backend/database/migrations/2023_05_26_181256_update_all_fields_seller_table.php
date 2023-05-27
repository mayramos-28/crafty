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
        //actualziar todos los campos de la tabla sellers
        Schema::table('sellers', function (Blueprint $table) {
            $table->renameColumn('bussnessType','businessType'); 
            $table->renameColumn('bussnessPhone','businessPhone'); 
            $table->renameColumn('bussnessWebsite','businessWebsite'); 
            $table->renameColumn('bussnessLogo', 'businessLogo')->nullable();
            $table->renameColumn('bussnessDescription', 'businessDescription'); 

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
