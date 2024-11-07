@extends('layouts.app_user')

@section('title', 'Home')

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
</style>

<main class="main container">
    <section class="details-wrapper">
        <div class="corner-title">
            <h1 class="corner-title-heading">Galeri</h1>
            <div class="music-product-description">
                <p>
                    <a class="btn mt-5" href="{{ route('foto.create') }}" style="color: #fff; background: transparent; font-size: 17px; border-radius: 20px; border: 1px solid #fff; position: relative;">Unggah Foto</a>
                </p>
            </div>
        </div>

        <div class="corner-tag-sort fadein">
            <div class="tag-list-wrap hidden-xs hidden-sm">
                <ul class="tag-list list-unstyled">
                    <li class="tag-list-item is-active">
                        <a href="{{ route('foto.user_gallery') }}">FOTO</a>
                    </li>
                    <li class="tag-list-item">
                        <a href="{{ route('foto.likes') }}">LIKE</a>
                    </li>
                </ul>
            </div>
            <div class="tag-list-wrap visible-xs visible-sm">
                <ul class="tag-list list-unstyled">
                    <li class="tag-list-item is-active">
                        <a href="{{ route('foto.user_gallery') }}">FOTO</a>
                    </li>
                    <li class="tag-list-item">
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

                                <div class="music-list-meta meta flex">
                                    <time class="time" datetime="{{ $foto->TanggalUnggah }}">
                                        {{ \Carbon\Carbon::parse($foto->TanggalUnggah)->format('d M Y') }}
                                    </time>
                                    <span class="music-category visible-xs">
                                        {{ $foto->album->NamaAlbum ?? 'Tidak ada album' }}
                                    </span>
                                </div>

                                <span class="music-category hidden-xs">
                                    {{ $foto->album->NamaAlbum ?? 'Tidak ada album' }}
                                </span>

                                <div class="music-list-title">
                                    <h2 class="truncate-title">{{ $foto->JudulFoto }}</h2>
                                </div>

                                <span class="uploader" style="position: absolute; right: 10px; bottom: 10px; color: #555;">
                                    Oleh: {{ $foto->user->name ?? 'Pengguna Tidak Dikenal' }}
                                </span>
                            </a>

                            <a href="{{ route('foto.edit', ['id' => $foto->FotoId]) }}" class="btn mt-5" style="color: #fff; background: transparent; font-size: 17px; border-radius: 20px; border: 1px solid #fff; position: relative;">Edit</a>

                            <a href="#" onclick="event.preventDefault(); document.getElementById('delete-form-{{ $foto->FotoId }}').submit();" class="btn mt-5" style="color: #fff; background: transparent; font-size: 17px; border-radius: 20px; border: 1px solid #fff; position: relative;">Hapus</a>
                            <form id="delete-form-{{ $foto->FotoId }}" action="{{ route('foto.destroy', ['id' => $foto->FotoId]) }}" method="POST" style="display: none;">
                                @csrf
                                @method('DELETE')
                            </form>
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
                                    <a href="{{ $fotos->nextPageUrl() }}" rel="next">Next 10 ›</a>
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
