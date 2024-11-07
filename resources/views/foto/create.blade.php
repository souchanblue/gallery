@extends('layouts.app_user')

@section('title', 'Upload Foto')

@php
$no_footer = true;
@endphp

@section('content')

<main class="index-content">
    <div class="container">
        <div class="row justify-content-center mt-2">
            <div class="corner-title">
                <h2 class="news-title text-center mb-5">Upload Foto</h2>
                
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-8 col-sm-12 mb-4">
                            <div class="form-wrapper" style="position: relative; width: 100%; max-width: 700px; padding: 40px; border-radius: 10px; border: 2px solid white; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.056);">
                                <section id="upload-foto-section">
                                    <form id="uploadForm" action="{{ route('foto.store') }}" method="POST" enctype="multipart/form-data" onsubmit="return validasiForm()">
                                        @csrf

                                        <div class="mb-3 text-center">
                                            <input type="file" class="form-control" id="foto" name="LokasiFile" accept="image/*" style="display: none;" onchange="pratinjauGambar(this)">
                                            <label for="foto" class="upload-icon" style="cursor: pointer;">
                                                <img src="{{ asset('img/add.png') }}" alt="Ikon Upload" id="uploadIcon" style="width: 200px; transition: filter 0.3s;">
                                            </label>
                                        </div>
                                        <style>
                                            #uploadIcon:hover {
                                                opacity: 0.7;
                                            }
                                        </style>

                                        <div class="mb-3">
                                            <p>
                                                <a class="btn mt-5" href="{{ route('foto.new_album') }}" style="color: #fff; background: transparent; font-size: 17px; border-radius: 20px; border: 1px solid #fff; position: relative;">Album Baru</a>
                                            </p><br>
                                        </div>
                                        <div class="mb-3">
                                            <label for="title" class="form-label d-flex">Judul Foto</label>
                                            <input type="text" class="form-control" name="JudulFoto" placeholder="Tambahkan Judul" style="background-color: transparent; color: white; border-color: white;" required>
                                        </div>

                                        <div class="mb-3">
                                            <label for="description" class="form-label d-flex">Deskripsi Foto</label>
                                            <textarea class="form-control" name="DeskripsiFoto" rows="3" placeholder="Tuliskan deskripsi foto anda" style="background-color: transparent; color: white; border-color: white; resize: none;" required></textarea>
                                        </div>

                                        <div class="mb-3">
                                            <label for="category" class="form-label d-flex">Album</label>
                                            <select class="form-select" name="AlbumId" required style="border-color: #007bff; background-color: #f8f9fa;" id="album-select">
                                                <option value="" disabled selected>Pilih Album</option>
                                                @foreach($albums as $album)
                                                <option value="{{ strtoupper($album->AlbumId) }}">{{ strtoupper($album->NamaAlbum) }}</option>
                                                @endforeach
                                            </select>

                                            <script>
                                                $(document).ready(function() {
                                                    $('#album-select').select2({
                                                        placeholder: "Pilih Album",
                                                        allowClear: true
                                                    });
                                                });
                                            </script>
                                        </div>

                                        <div class="d-grid">
                                            <button type="submit" class="btn btn-primary" style="background-color: white; color: black; border: none; transition: background-color 0.3s ease;">Upload</button>
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
<script>

function pratinjauGambar(input) {
        const icon = document.getElementById('uploadIcon');
        
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            reader.onload = function(e) {
                icon.src = e.target.result;
            }

            reader.readAsDataURL(input.files[0]);
        }
    }
        // sweet allert
    function validasiForm() {
        const fileInput = document.getElementById('foto');

        if (!fileInput.files || !fileInput.files.length) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Harap unggah foto sebelum mengirim form.',
                confirmButtonText: 'Tutup'
            });
            return false;
        }

        return true;
    }
</script>
@endsection
