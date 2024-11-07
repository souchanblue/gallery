@extends('layouts.app_user')

@section('title', 'GALLERY | Detail Album')

@section('content')
@php
$no_footer = true;
@endphp
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
</style>
<main class="main container">

    <h1 class="mb-4">{{ $album->NamaAlbum }}</h1>

    <a href="{{ route('albums_guest') }}" class="btn btn-secondary mb-4" style="color: #fff; background: transparent; font-size: 17px; border-radius: 20px; border: 1px solid #fff; position: relative;">Kembali ke Album</a>

    <div class="corner-content discography-wrapp">
        <div class="music-list-wrapp">
            <ol class="music-list list-unstyled">
                @forelse($fotos as $foto)
                    <li class="music-list-item fadein">
                        <a href="{{ route('show_guest', ['id' => $foto->FotoId]) }}" aria-label="{{ $foto->JudulFoto }}">
                            <div class="music-list-thumb thumb">
                                <img alt="{{ $foto->JudulFoto }}" class="img-responsive center-block" src="{{ asset('/storage/' . $foto->LokasiFile) }}" loading="lazy" />
                            </div>
                        </a>
                    </li>
                @empty
                    <p>Tidak ada foto tersedia.</p>
                @endforelse
            </ol>

            @if ($fotos->total() > 12)
                <div class="paging fadein">
                    <div class="pagination">

                        @if (!$fotos->onFirstPage())
                            <span class="page"><a href="{{ $fotos->previousPageUrl() }}" rel="prev">‹ Prev</a></span>
                        @endif

                        @foreach ($fotos->getUrlRange(1, $fotos->lastPage()) as $page => $url)
                            @if ($page == $fotos->currentPage())
                                <span class="page current">{{ $page }}</span>
                            @else
                                <span class="page"><a href="{{ $url }}" rel="next">{{ $page }}</a></span>
                            @endif
                        @endforeach

                        @if ($fotos->hasMorePages())
                            <span class="next">
                                <a href="{{ $fotos->nextPageUrl() }}" rel="next">Next 10 ›</a>
                            </span>
                        @endif
                    </div>
                </div>
            @endif
        </div>
    </div>
</main>

@endsection

@section('scripts')
    <script src="{{ asset('js/background.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/cursor.js') }}" type="text/javascript"></script>
@endsection
