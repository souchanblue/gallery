<?php

namespace App\Http\Controllers;

use App\Models\Foto;
use App\Models\Album;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    // Menampilkan halaman dashboard admin
    public function dashboard()
    {
        return view('admin.dashboard');
    }

    // Menampilkan data foto
    public function photos()
    {
        $photos = Foto::all(); // Ambil semua data foto
        return view('admin.photos', compact('photos'));
    }

    // Menampilkan data album
    public function albums()
    {
        $albums = Album::all(); // Ambil semua data album
        return view('admin.albums', compact('albums'));
    }

    // Menampilkan data pengguna
    public function users()
    {
        $users = User::all(); // Ambil semua data user
        return view('admin.users', compact('users'));
    }
}