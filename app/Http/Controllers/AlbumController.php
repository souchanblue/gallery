<?php

namespace App\Http\Controllers;

use App\Models\Album;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\StoreAlbumRequest;
use App\Http\Requests\UpdateAlbumRequest;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $albums = Album::all();
        return view('album.index', compact('albums'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'NamaAlbum' => 'required|string|max:255',
            'Deskripsi' => 'nullable|string',
        ]);

        $album = Album::findOrFail($id);
        $album->update([
            'NamaAlbum' => $request->NamaAlbum,
            'Deskripsi' => $request->Deskripsi,
        ]);

        return redirect()->route('album.index')->with('success', 'Album updated successfully.');
    }

    public function destroy($id)
    {
        $album = Album::findOrFail($id);
        $album->delete();

        return redirect()->route('album.index')->with('success', 'Album deleted successfully.');
    }

    public function user()
    {
        $users = User::all();  // Get all users
        return view('album.user', compact('users'));  // Return view with user data
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