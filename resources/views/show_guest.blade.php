@extends('layouts.app')

@section('title', 'Home')

@section('content')
<style>
    .thumb {
        position: relative;
    }

    .img-responsive {
        border-radius: 10px;
        width: 100%;
        height: auto;
    }

    .comment {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid rgb(255, 255, 255);
    }

    .comment-header {
        margin-bottom: 5px;
    }

    .comment-author {
        font-weight: bold;
        color: #ffffff;
    }

    .comment-date {
        color: #ccc;
        font-size: small;
    }

    .truncate-title {
        white-space: normal;
        word-wrap: break-word;
        word-break: break-word;
        max-width: 100%;
        overflow-wrap: break-word;
    }

    .wrap-description {
        white-space: normal;
        word-wrap: break-word;
        word-break: break-word;
        max-width: 100%;
        overflow-wrap: break-word;
    }
</style>

<main class="main container">
    <section class="corner">
        <div class="corner-title">
            <h1 class="corner-title-heading mb-5">Detail Foto</h1>
            <h2 class="truncate-title corner-title-heading">{{ $foto->JudulFoto }}</h2>
        </div>
        <article class="corner-content discography-wrapp">
            <section class="music-details fadein">
                <div class="music-heading">
                    <div class="music-title">
                        <h3 class="wrap-description">{{ $foto->DeskripsiFoto }}</h3>
                    </div>
                </div>
                <section class="row music-product-details">
                    <div class="col-sm-4">
                        <div class="thumb">
                            <img alt="{{ $foto->JudulFoto }}" class="img-responsive center-block" 
                                src="{{ asset('/storage/' . $foto->LokasiFile) }}" loading="lazy" />
                        </div>
                    </div>
                    <div class="col-sm-8 music">
                        <div class="meta">
                            <span class="music-category">{{ $foto->album->NamaAlbum ?? 'Tanpa Album' }}</span>
                            <span class="time">{{ \Carbon\Carbon::parse($foto->TanggalUnggah)->format('d M Y') }}</span>
                        </div>
                        <div class="music-product-title">
                            <h5 class="music-category ms-1 bg-warning">{{ $foto->user->username ?? 'Pengguna Tidak Dikenal' }}</h5>
                        </div>
                        <div class="music-product-disc">
                            <p>Silakan login untuk menulis komentar.</p>
                        </div>
                        <ol class="track-list list-unstyled">
                            @foreach($foto->komentars as $komentar)
                                <li class="track-list-item">
                                    <div class="comment">
                                        <div class="comment-header">
                                            <span class="comment-author">{{ $komentar->user->username }}</span>
                                            <span class="comment-date">
                                                @if($komentar->TanggalKomentar)
                                                    {{ \Carbon\Carbon::parse($komentar->TanggalKomentar)->format('d F Y') }}
                                                @else
                                                    Tanggal tidak tersedia
                                                @endif
                                            </span>
                                        </div>
                                        <div class="comment-text">
                                            {{ $komentar->IsiKomentar }}
                                        </div>
                                    </div>
                                </li>
                            @endforeach
                        </ol>
                    </div>
                </section>
            </section>
        </article>
    </section>
</main>

@endsection
