<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Album;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreAlbumRequest;
use App\Http\Requests\UpdateAlbumRequest;

class AlbumController extends Controller
{

public function destroy($id): RedirectResponse
{
    // Temukan album berdasarkan ID
    $album = Album::with('fotos')->findOrFail($id);

    // Hapus foto terkait terlebih dahulu
    foreach ($album->fotos as $foto) {
        // Hapus file foto dari penyimpanan jika ada
        if (Storage::exists('public/' . $foto->LokasiFile)) {
            Storage::delete('public/' . $foto->LokasiFile);
        }
        $foto->delete(); // Hapus dari database
    }

    // Hapus album
    $album->delete();

    // Redirect dengan pesan sukses
    return redirect()->route('foto.album')->with('success', 'Album berhasil dihapus.');
}
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAlbumRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Album $album)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */

}