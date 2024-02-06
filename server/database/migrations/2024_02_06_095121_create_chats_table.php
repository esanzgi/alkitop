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
        Schema::create('chats', function (Blueprint $table) {
            $table->unsignedBigInteger('id_from');
            $table->unsignedBigInteger('id_to');
            $table->text('mezua');
            $table->timestamps();

            $table->foreign('id_from')->references('id_user')->on('users');
            $table->foreign('id_to')->references('id_user')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chats');
    }
};
