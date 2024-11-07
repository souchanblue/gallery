@extends('layouts.app_user')

@section('title', 'Tambah')

@section('content')
@php
    $no_footer = true;
@endphp

<main class="index-content">
    <div class="container mt-5">
        <div class="row justify-content-center mt-5">
            <div class="corner-title">
                <h2 class="news-title text-center mb-5">Tambah Album</h2>
            </div>
            <div class="col-lg-6 col-md-12 mb-4">
                <div class="form-wrapper" style="position: relative; width: 100%; max-width: 700px; padding: 40px; border-radius: 10px; border: 2px solid white; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.056);">
                    <form action="{{ route('foto.store_album') }}" method="POST">
                        @csrf
                        <div class="mb-3">
                            <label for="NamaAlbum" class="form-label text-white">Nama Album</label>
                            @error('NamaAlbum')
                                <small class="text-danger">{{ $message }}</small>
                            @enderror
                            <input type="text" name="NamaAlbum" class="form-control" id="NamaAlbum" placeholder="Masukkan Nama Album" required style="background-color: transparent; color: white; border-color: white; text-transform: uppercase;">
                        </div>
                        <div class="mb-3">
                            <label for="DeskripsiAlbum" class="form-label text-white">Deskripsi Album</label>
                            @error('DeskripsiAlbum')
                                <small class="text-danger">{{ $message }}</small>
                            @enderror
                            <textarea name="DeskripsiAlbum" class="form-control" id="DeskripsiAlbum" placeholder="Deskripsikan Album" style="background-color: transparent; color: white; border-color: white;"></textarea>
                        </div>
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary" style="background-color: white; color: black; border: none; transition: background-color 0.3s ease;">Simpan Album</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>

@endsection
