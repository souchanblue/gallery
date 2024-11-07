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
        $albums = Album::with('photos')->paginate(12); // Adjust the pagination as needed
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
        // Ambil album berdasarkan ID dan relasikan dengan foto
        $album = Album::with('fotos')->findOrFail($id);
        
        // Gunakan paginate untuk foto, agar dapat menggunakan pagination dan method seperti onFirstPage()
        $fotos = $album->fotos()->paginate(12);  // Tambahkan pagination di sini
        
        // Kirim album dan foto-foto yang sudah dipaginasi ke view
        return view('album_detail_guest', [
            'album' => $album,
            'fotos' => $fotos, // Mengirimkan daftar foto yang sudah dipaginasi
        ]);
    }
    
    
    
    
}