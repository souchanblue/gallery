@extends('layouts.app_user')

@section('title', 'GALLERY | Like')

@section('content')
<style>
    .music-list-wrapp {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;
    }

    .music-list-thumb {
        width: 100%;
        height: 200px;
        border-radius: 16px;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .music-list-thumb img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s;
    }

    .truncate-title {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }
</style>

<main class="main container">
    <section class="details-wrapper">
        <div class="corner-title">
            <h1 class="corner-title-heading">Galeri</h1>
        </div>

        <div class="corner-tag-sort fadein">
            <div class="tag-list-wrap hidden-xs hidden-sm">
                <ul class="tag-list list-unstyled">
                    <li class="tag-list-item">
                        <a href="{{ route('foto.user_gallery') }}">PHOTO</a>
                    </li>
                    <li class="tag-list-item is-active">
                        <a href="{{ route('foto.likes') }}">LIKE</a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="corner-content discography-wrapp">
            <div class="music-list-wrapp">
                @forelse($fotos as $foto)
                    <div class="music-list-item fadein">
                        <a href="{{ route('foto.show', ['id' => $foto->FotoId]) }}" aria-label="{{ $foto->JudulFoto }}">
                            <div class="music-list-thumb thumb">
                                <img alt="{{ $foto->JudulFoto }}" src="{{ asset('/storage/' . $foto->LokasiFile) }}" loading="lazy" />
                            </div>
                        </a>
                    </div>
                @empty
                    <p>Tidak ada foto yang disukai.</p>
                @endforelse
            </div>
        </div>
    </section>
</main>
@endsection

@section('scripts')
@endsection
