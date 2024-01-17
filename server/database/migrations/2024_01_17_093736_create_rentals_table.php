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
        Schema::create('rentals', function (Blueprint $table) {
            $table->id('id_rental');
            $table->unsignedBigInteger('id_product');
            $table->unsignedBigInteger('id_user');
            $table->date('start_date');
            $table->date('end_date')->nullable();
            $table->enum('status', ['En curso', 'Finalizado'])->default('En curso');
            $table->decimal('total_cost', 10, 2)->nullable();
            $table->timestamps();
            $table->foreign('id_product')->references('id_product')->on('products');
            $table->foreign('id_user')->references('id_user')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rentals');
    }
};
