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
        Schema::create('foto', function (Blueprint $table) {
            $table->id('FotoId'); // Primary key
            $table->string('JudulFoto', 255);
            $table->text('DeskripsiFoto')->nullable();
            $table->date('TanggalUnggah');
            $table->string('LokasiFile', 255);
            $table->unsignedBigInteger('AlbumId'); // Foreign key for albums
            $table->foreign('AlbumId')->references('AlbumId')->on('album')->onDelete('cascade'); // Foreign key constraint
            $table->unsignedBigInteger('UserId'); // Foreign key for users
            $table->foreign('UserId')->references('id')->on('users')->onDelete('cascade'); // Foreign key constraint
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