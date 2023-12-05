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
            $table->id('id_product');
            $table->string('name');
            $table->text('description');
            $table->string('image');
            $table->unsignedBigInteger('id_owner');
            $table->foreign('id_owner')->references('id_owner')->on('owners'); // Asegúrate de que 'owners' sea el nombre correcto de la tabla de Owners
            $table->boolean('isEco');
            $table->decimal('price', 10, 2);
            $table->string('location');
            $table->string('category');
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
