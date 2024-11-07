<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Foto extends Model
{
    use HasFactory;

    protected $primaryKey = 'FotoId';
    
    protected $table = 'foto'; // Nama tabel yang benar

    
    // Menggunakan guarded untuk melindungi kolom secara mass-assignment
    protected $guarded = ['FotoId'];

    // Relasi dengan Album
    public function album()
    {
        return $this->belongsTo(Album::class, 'AlbumId', 'AlbumId');
    }

    // Relasi dengan User
    public function user()
    {
        return $this->belongsTo(User::class, 'UserId', 'id');
    }
    
    public function likes()
    {
        return $this->hasMany(LikeFoto::class, 'FotoId', 'FotoId');
    }

    public function komentars()
    {
        return $this->hasMany(KomentarFoto::class, 'FotoId');
    }

    

}