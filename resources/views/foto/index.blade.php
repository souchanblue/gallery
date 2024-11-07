@extends('layouts.app_user')

@section('title', 'GALLERY | Semua')

@section('content')

<style>
    .music-list-thumb {
        width: 100%;
        max-width: 500px;
        height: 200px;
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;
    }

    .music-list-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.3s;
    }

    .truncate-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 500px;
    }

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
        right: 480px;
        top: 60px;
        transform: translateY(-50%);
        z-index: 1;
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

    @media (max-width: 767px) {
        .back-button {
            right: 32%;
            margin-top: 42px;
            top: 30%;
            transform: translate(-50%, -50%) rotate(0deg);
        }
    }

    .btn-nav-icon-text .back-button {
        visibility: hidden;
    }

    .delete-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background-color: red;
        color: white;
        border: none;
        border-radius: 50%;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 14px;
        display: none;
    }

    .music-list-thumb:hover .delete-btn {
        display: block;
    }
</style>

<main class="main container">
    <section class="details-wrapper">
        <div class="corner-title">
            <h1 class="corner-title-heading text-center">HOME</h1>
            <div class="flex">
                <a class="btn back-button ms-auto" href="{{ route('foto.user_gallery') }}" style="color: #ffffff; background: transparent; font-size: 15px; border-radius: 20px; border: 1px solid #fff; position: relative;">Galeri</a>
            </div>
            <h3 class="corner-title-heading">
                Selamat datang, {{ auth()->user()->username }}!
                @if(auth()->user()->is_admin == 1)
                    - Admin
                @else
                    - User
                @endif
            </h3>
            </div>
        <div class="corner-tag-sort fadein">
            <div class="tag-list-wrap hidden-xs hidden-sm">
                <ul class="tag-list list-unstyled">
                    <li class="tag-list-item is-active">
                        <a href="{{ route('foto.index') }}">SEMUA</a>
                    </li>
                    <li class="tag-list-item">
                        <a href="{{ route('foto.album') }}">ALBUM</a>
                    </li>
                </ul>
            </div>
            <div class="tag-list-wrap visible-xs visible-sm">
                <ul class="tag-list list-unstyled">
                    <li class="tag-list-item is-active">
                        <a href="{{ route('foto.index') }}">SEMUA</a>
                    </li>
                    <li class="tag-list-item">
                        <a href="{{ route('foto.album') }}">ALBUM</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="corner-content discography-wrapp">
            <div class="music-list-wrapp">
                <ol class="music-list list-unstyled">
                    @forelse($fotos as $foto)
                        <li class="music-list-item fadein">
                            <a href="{{ route('foto.show', ['id' => $foto->FotoId]) }}" aria-label="{{ $foto->JudulFoto }}">
                                <div class="music-list-thumb thumb">
                                    <img alt="{{ $foto->JudulFoto }}" class="img-responsive center-block" src="{{ asset('/storage/' . $foto->LokasiFile) }}" loading="lazy" />
                                </div>
                            </a>
                                <!-- Hanya tampilkan tombol hapus untuk admin -->
                                    @auth
                                    @if(auth()->user()->is_admin == 1)
                                    <a href="#" onclick="event.preventDefault(); document.getElementById('delete-form-{{ $foto->FotoId }}').submit();" class="btn mt-5" style="color: #fff; background: transparent; font-size: 17px; border-radius: 20px; border: 1px solid #fff; position: relative;">
                                        Hapus
                                    </a>
                                    <form id="delete-form-{{ $foto->FotoId }}" action="{{ route('foto.destroy', ['id' => $foto->FotoId]) }}" method="POST" style="display: none;">
                                        @csrf
                                        @method('DELETE')
                                    </form>
                                @endif
                            @endauth
                        </li>
                    @empty
                        <p>Tidak ada foto tersedia.</p>
                    @endforelse
                </ol>

                <!-- Custom Pagination -->
                @if ($fotos->total() > 12)
                    <div class="paging fadein">
                        <div class="pagination">

                            @if (!$fotos->onFirstPage())
                                <span class="page">
                                    <a href="{{ $fotos->previousPageUrl() }}" rel="prev">‹ Prev</a>
                                </span>
                            @else
                                <span class="page disabled"></span>
                            @endif

                            @foreach ($fotos->getUrlRange(1, $fotos->lastPage()) as $page => $url)
                                @if ($page == $fotos->currentPage())
                                    <span class="page current">{{ $page }}</span>
                                @else
                                    <span class="page">
                                        <a href="{{ $url }}">{{ $page }}</a>
                                    </span>
                                @endif
                            @endforeach

                            @if ($fotos->hasMorePages())
                                <span class="page next">
                                    <a href="{{ $fotos->nextPageUrl() }}" rel="next">Next ></a>
                                </span>
                            @else
                                <span class="page disabled"></span>
                            @endif
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </section>
</main>

@endsection

@section('scripts')
@endsection
