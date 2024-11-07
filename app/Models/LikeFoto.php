<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LikeFoto extends Model
{
    use HasFactory;

    // Menentukan nama tabel
    protected $table = 'likefoto';

    // Menentukan kunci utama
    protected $primaryKey = 'LikeId'; // Pastikan ini adalah kunci utama yang sebenarnya

    // Jika kunci utama bukan integer yang auto-increment
    public $incrementing = false;

    // Mengaktifkan timestamps jika Anda memiliki created_at dan updated_at di basis data
    public $timestamps = true;

    // Atribut yang dapat diisi
    protected $fillable = [
        'FotoId',
        'UserId',
        'TanggalLike'
    ];

    // Hubungan dengan Foto
    public function foto()
    {
        return $this->belongsTo(Foto::class, 'FotoId', 'FotoId');
    }

    // Hubungan dengan User
    public function user()
    {
        return $this->belongsTo(User::class, 'UserId', 'id');
    }
}