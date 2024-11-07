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
        Schema::create('komentarfoto', function (Blueprint $table) {
            $table->id('KomentarId'); // Primary key
            $table->unsignedBigInteger('FotoId'); // Foreign key
            $table->foreign('FotoId')->references('FotoId')->on('foto')->onDelete('cascade'); // Foreign key
            $table->unsignedBigInteger('UserId'); // Foreign key
            $table->foreign('UserId')->references('id')->on('users')->onDelete('cascade'); // Foreign key
            $table->text('IsiKomentar');
            $table->date('TanggalKomentar');
            $table->timestamps();
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