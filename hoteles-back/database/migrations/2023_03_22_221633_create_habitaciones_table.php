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
        Schema::create('habitaciones', function (Blueprint $table) {
            
            $table->id();
            $table->string('nombre', 1000)->nullable();

            $table->unsignedBigInteger('hotel');
            $table->foreign('hotel')->references('id')->on('hoteles');

            $table->unsignedBigInteger('configuracion');
            $table->foreign('configuracion')->references('id')->on('configuraciones');

            $table->unsignedBigInteger('estado');
            $table->foreign('estado')->references('id')->on('estados');



            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('habitaciones');
    }
};
