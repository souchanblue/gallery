<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KomentarFoto extends Model
{
    use HasFactory;

    protected $table = 'komentarfoto';
    protected $primaryKey = 'KomentarId';
    public $timestamps = false;

    protected $fillable = [
        'IsiKomentar', 'TanggalKomentar', 'UserId', 'FotoId'
    ];

    // Definisikan relasi ke model User
    public function user()
    {
        return $this->belongsTo(User::class, 'UserId', 'id'); // Pastikan 'id' adalah primary key di model User
    }
}