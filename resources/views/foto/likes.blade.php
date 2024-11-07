@extends('layouts.app_user')

@section('title', 'GALLERY | Like')

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
            <div class="tag-list-wrap visible-xs visible-sm">
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
                <ol class="music-list list-unstyled">
                    @forelse($fotos as $foto)
                        <li class="music-list-item fadein">
                            <a href="{{ route('foto.show', ['id' => $foto->FotoId]) }}" aria-label="{{ $foto->JudulFoto }}">
                                <div class="music-list-thumb thumb">
                                    <img alt="{{ $foto->JudulFoto }}" class="img-responsive center-block" src="{{ asset('/storage/' . $foto->LokasiFile) }}" loading="lazy" />
                                </div>
                                </div>
                            </a>
                        </li>
                    @empty
                        <p>Tidak ada foto yang disukai.</p>
                    @endforelse
                </ol>
                <div class="paging fadein"></div>
            </div>
    </section>
</main>
@endsection

@section('scripts')
@endsection
