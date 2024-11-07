<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FotoController;
use App\Http\Controllers\AlbumController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\KomentarController;
use App\Http\Controllers\Auth\AuthController;

// Grup route untuk tamu (guest)

Route::middleware('guest')->group(function () {

    Route::get('/', [GalleryController::class, 'home_guest'])->name('home_guest');
    Route::get('albums-guest', [GalleryController::class, 'albums_guest'])->name('albums_guest');
    Route::get('show-guest/{id}', [GalleryController::class, 'show_guest'])->name('show_guest');
    Route::get('/album/{id}', [GalleryController::class, 'album_detail_guest'])->name('album_detail_guest');
    Route::get('register', [AuthController::class, 'showRegisterForm'])->name('register');
    Route::post('register', [AuthController::class, 'register']);
    Route::get('login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('login', [AuthController::class, 'login']);
});

Route::middleware('auth')->group(function () {
    Route::delete('/album/{id}', [AlbumController::class, 'destroy'])->name('album.destroy');

    // Route untuk foto
    Route::get('/foto', [FotoController::class, 'index'])->name('foto.index');
    Route::get('/foto/create', [FotoController::class, 'create'])->name('foto.create');
    Route::get('/foto/new-album', [FotoController::class, 'newAlbum'])->name('foto.new_album');
    Route::post('/foto/store-album', [FotoController::class, 'storeAlbum'])->name('foto.store_album');
    Route::post('/foto', [FotoController::class, 'store'])->name('foto.store');
    Route::get('/foto/my-gallery', [FotoController::class, 'userGallery'])->name('foto.user_gallery');
    Route::get('/foto/album', [FotoController::class, 'indexAlbums'])->name('foto.album');
    Route::get('/foto/album/{id}', [FotoController::class, 'showAlbum'])->name('foto.album.show');
    Route::get('/foto/{id}', [FotoController::class, 'show'])->name('foto.show');
    Route::post('/foto/{id}/like', [FotoController::class, 'like'])->name('foto.like');
    Route::get('/likes', [FotoController::class, 'likedPhotos'])->name('foto.likes');

    // Route untuk komentar
    Route::post('/foto/{fotoId}/komentar', [FotoController::class, 'storeKomentar'])->name('foto.komentar.store');
    Route::delete('/foto/{fotoId}/komentar/{komentarId}', [KomentarController::class, 'destroy'])->name('foto.komentar.destroy');

    // Route untuk mengedit foto
    Route::get('/foto/{id}/edit', [FotoController::class, 'edit'])->name('foto.edit');
    Route::put('/foto/{id}', [FotoController::class, 'update'])->name('foto.update');

    // Route untuk menghapus foto
    Route::delete('/foto/{id}', [FotoController::class, 'destroy'])->name('foto.destroy');

});

// Route untuk logout
Route::post('logout', [AuthController::class, 'logout'])->name('logout');