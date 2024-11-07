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
        Schema::create('likefoto', function (Blueprint $table) {
            $table->id('LikeId'); // Primary key
            $table->unsignedBigInteger('FotoId'); // Foreign key untuk foto
            $table->foreign('FotoId')->references('FotoId')->on('foto')->onDelete('cascade'); // Foreign key
            $table->unsignedBigInteger('UserId'); // Foreign key untuk pengguna
            $table->foreign('UserId')->references('id')->on('users')->onDelete('cascade'); // Foreign key
            $table->timestamps(); // Menyimpan created_at dan updated_at
            // Tambahkan kolom untuk menyimpan waktu like
            $table->timestamp('TanggalLike')->useCurrent(); // Menggunakan timestamp saat foto disukai
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