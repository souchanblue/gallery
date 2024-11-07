<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Album extends Model
{
    use HasFactory;

    // Tentukan nama tabel jika tidak sesuai dengan konvensi Laravel
    protected $table = 'album'; // Nama tabel yang benar
    
    protected $primaryKey = 'AlbumId';


    protected $fillable = [
        'NamaAlbum',
        'Deskripsi',
        'TanggalDibuat',
        'UserId',
    ];

    public function getNamaAlbumAttribute($value)
    {
        return strtoupper($value);
    }

    // Definisikan relasi dengan model Foto jika diperlukan
    public function fotos()
    {
        return $this->hasMany(Foto::class, 'AlbumId', 'AlbumId');
    }

    // Definisikan relasi hasMany ke model Foto
    public function photos()
    {
        return $this->hasMany(Foto::class, 'AlbumId', 'AlbumId');
    }
}