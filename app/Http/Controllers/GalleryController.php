<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use App\Models\Album;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GalleryController extends Controller
{
    // Fungsi untuk halaman utama bagi pengunjung yang belum login
    public function home_guest()
    {
        // Mengambil foto terbaru dengan paginasi untuk halaman tamu
        $fotos = Foto::latest()->paginate(12);

        // Mengembalikan view 'home_guest' dengan data foto
        return view('index', compact('fotos'));
    }

    // Fungsi untuk menampilkan semua album untuk pengunjung
    public function albums_guest()
    {
        $albums = Album::with('photos')->paginate(12);
        return view('albums_guest', compact('albums'));
    }
    

    // Fungsi untuk menampilkan detail foto bagi pengunjung
    public function show_guest($id)
    {
        $foto = Foto::findOrFail($id);
        return view('show_guest', compact('foto'));
    }

    // Fungsi untuk menampilkan detail album bagi pengunjung
    public function album_detail_guest($id)
    {
        
        $album = Album::with('fotos')->findOrFail($id);
        

        $fotos = $album->fotos()->paginate(12);
        // Kirim album dan foto-foto yang sudah dipaginasi ke view
        return view('album_detail_guest', [
            'album' => $album, 
            'fotos' => $fotos,
        ]);
    }

}