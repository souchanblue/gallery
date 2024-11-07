@extends('layouts.app_user')

@section('title', 'Edit Foto')

@section('content')
<main class="index-content">
    <div class="container">
        <div class="row justify-content-center mt-2">
            <div class="corner-title">
                <h2 class="news-title text-center mb-5">Edit Foto</h2>
                <div class="container">
                    <p>
                        <a class="btn mt-5 back-button" href="{{ route('foto.user_gallery') }}" style="color: #ffffff; background: transparent; font-size: 15px; border-radius: 20px; border: 1px solid #fff; position: relative;">Kembali</a>
                    </p>
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8 col-sm-12 mb-4">
                            <div class="form-wrapper" style="position: relative; width: 100%; max-width: 700px; padding: 40px; border-radius: 10px; border: 2px solid white; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.056);">
                                <section id="edit-foto-section">
                                    <form action="{{ route('foto.update', $foto->FotoId) }}" method="POST" enctype="multipart/form-data">
                                        @csrf
                                        @method('PUT')

                                        <div class="mb-3 text-center">
                                            <input type="file" class="form-control" id="foto" name="LokasiFile" accept="image/*" style="display: none;" onchange="previewImage(this)">
                                            <label for="foto" class="upload-icon" style="cursor: pointer;">
                                                <img src="{{ asset('storage/' . $foto->LokasiFile) }}" alt="Edit Foto" id="uploadIcon" style="width: 200px;">
                                            </label>
                                        </div>

                                        <div class="mb-3">
                                            <label for="title" class="form-label d-flex">Judul Foto</label>
                                            <input type="text" class="form-control" name="JudulFoto" value="{{ $foto->JudulFoto }}" required>
                                        </div>

                                        <div class="mb-3">
                                            <label for="description" class="form-label d-flex">Deskripsi Foto</label>
                                            <textarea class="form-control" name="DeskripsiFoto" rows="3" required>{{ $foto->DeskripsiFoto }}</textarea>
                                        </div>

                                        <div class="mb-3">
                                            <label for="category" class="form-label d-flex">Album</label>
                                            <select class="form-select" name="AlbumId" required>
                                                @foreach($albums as $album)
                                                    <option value="{{ $album->AlbumId }}" {{ $album->AlbumId == $foto->AlbumId ? 'selected' : '' }}>{{ $album->NamaAlbum }}</option>
                                                @endforeach
                                            </select>
                                        </div>

                                        <div class="d-grid">
                                            <button type="submit" class="btn btn-primary">Update Foto</button>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection

@section('scripts')
<script src="{{ asset('js/background.js') }}" type="text/javascript"></script>
<script src="{{ asset('js/cursor.js') }}" type="text/javascript"></script>
<script>
    function previewImage(input) {
        const icon = document.getElementById('uploadIcon');
        
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                icon.src = e.target.result;
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
</script>
@endsection

@section('styles')
<style>
    /* Animasi untuk pergerakan tombol dan rotasi melingkar */
    @keyframes moveButton {
        0% {
            transform: translate(-50%, -50%) rotate(0deg); /* Posisi awal dan tidak berputar */
        }
        25% {
            transform: translate(-50%, -50%) rotate(90deg); /* Melingkar dengan rotasi */
        }
        50% {
            transform: translate(-50%, -50%) rotate(180deg); /* Melingkar dengan rotasi */
        }
        75% {
            transform: translate(-50%, -50%) rotate(270deg); /* Melingkar dengan rotasi */
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg); /* Melingkar kembali ke posisi semula */
        }
    }

    .back-button {
        position: fixed;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 0;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        animation: moveButton 10s infinite linear;
        padding: 10px 20px;
        background-color: rgba(0, 0, 0, 0.6);
        color: white;
        border-radius: 50px;
        font-size: 16px;
        text-align: center;
        cursor: pointer;
    }
</style>


@endsection
