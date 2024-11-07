@extends('layouts.app')

@section('title', 'GALLERY | Home')

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
    .truncate-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 500px;
    }
</style>
<main class="main container">
    <section class="details-wrapper">
        <div class="corner-title text-center">
            <br><br><br><br>
            <img src="{{ asset('img/logo.png') }}" alt="Logo" class="logo-center mb-3" style="width: 200px">
            <p>Silakan <a class="text-info" href="/login">login</a> untuk mendapatkan akses yang lebih lengkap</p>
        </div>
        <div class="corner-tag-sort fadein">
            <div class="tag-list-wrap hidden-xs hidden-sm">
                <ul class="tag-list list-unstyled">
                    <li class="tag-list-item is-active">
                        <a href="{{ route('home_guest') }}">SEMUA</a>
                    </li>
                    <li class="tag-list-item">
                        <a href="{{ route('albums_guest') }}">ALBUM</a>
                    </li>
                </ul>
            </div>
            <div class="tag-list-wrap visible-xs visible-sm">
                <ul class="tag-list list-unstyled">
                    <li class="tag-list-item is-active">
                        <a href="{{ route('home_guest') }}">SEMUA</a>
                    </li>
                    <li class="tag-list-item">
                        <a href="{{ route('albums_guest') }}">ALBUM</a>
                    </li>
                </ul>
            </div>
        </div>

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

                <!-- Custom Pagination (Visible only if more than 12 photos) -->
                @if ($fotos->total() > 12)
                    <div class="paging fadein">
                        <div class="pagination">
                            @if (!$fotos->onFirstPage())
                                <span class="previous">
                                    <a href="{{ $fotos->previousPageUrl() }}" rel="prev">Previous</a>
                                </span>
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
                                    <a href="{{ $fotos->nextPageUrl() }}" rel="next">Next</a>
                                </span>
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
