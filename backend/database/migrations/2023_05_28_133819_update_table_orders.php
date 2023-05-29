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

        Schema::table('orders', function (Blueprint $table) {
            //eliminar foreign key
            //$table->dropForeign(['sellerId']);
            //$table->dropColumn('sellerId');
            //  $table->dropColumn('type');
            // $table->dropColumn('invoiceNumber');          
            // $table->dropColumn('ShippingAddress');
            // $table->unsignedBigInteger('addressId');
            // $table->foreign('addressId')
            //     ->references('id')
            //     ->on('addresses')->onDelete('cascade');
          

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
