  @extends('layouts.app')

  @section('title', 'GALLERY | Home')

  @section('content')
  @php
$no_footer = true;
@endphp
<style>
  @media (max-width: 768px) {
      .album-item {
          flex: 1 1 100% !important;
          height: 200px;
      }

      .album-photo-wrapper {
          height: 200px;
      }

      .corner-title h5 {
          padding-top: 10vh;
          text-align: center;
          font-size: 50px;
      }
  }
</style>

<main class="main container">
  <section class="details-wrapper">
    <div class="corner-title">
      <h1 class="corner-title-heading text-center">ALBUM</h1>
    </div>

    <div class="corner-tag-sort fadein">
      <div class="tag-list-wrap hidden-xs hidden-sm">
        <ul class="tag-list list-unstyled">
          <li class="tag-list-item">
            <a href="{{ route('home_guest') }}">SEMUA</a>
          </li>
          <li class="tag-list-item is-active">
            <a href="{{ route('albums_guest') }}">ALBUM</a>
          </li>
        </ul>
      </div>
      <div class="tag-list-wrap visible-xs visible-sm">
        <ul class="tag-list list-unstyled">
          <li class="tag-list-item ">
            <a href="{{ route('home_guest') }}">SEMUA</a>
          </li>
          <li class="tag-list-item is-active">
            <a href="{{ route('albums_guest') }}">ALBUM</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="corner-content discography-wrapp">
      <div class="music-list-wrapp">
    <ol class="music-list list-unstyled" style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: space-between;">
      <section style="display: flex; flex-wrap: wrap; gap: 16px; width: 100%;">
              @forelse($albums as $album)
                  <div class="album-item" style="flex: 1 1 calc(33.333% - 16px); border-radius: 10px; overflow: hidden; margin-bottom: 16px; position: relative; height: 500px; display: flex; flex-direction: column;">
                      <a href="{{ route('album_detail_guest', ['id' => $album->AlbumId]) }}" aria-label="{{ $album->NamaAlbum }}" style="display: block; height: 100%;">
                          <!-- Gambar dengan Ukuran Tetap dan Penyesuaian -->
                          <div class="music-list-thumb thumb">
                          <img id="album-photo-{{ $album->AlbumId }}" 
                               src="{{ asset('storage/' . ($album->fotos->count() > 0 ? $album->fotos->first()->LokasiFile : 'default.jpg')) }}" 
                               alt="{{ $album->NamaAlbum }}" 
                               class="img-responsive center-block"
                               style="width: 100%; height: 100%; object-fit: cover; filter: brightness(0.2); border-radius: 10px; transition: all 0.3s;">
                          </div>
                          <div class="album-title corner-title" style="position: absolute; top: 35%; left: 50%; transform: translate(-50%, -50%); color: white; text-align: center; z-index: 1">
                              <h5 class="corner-title-heading" style="margin: 0;">{{ strtoupper($album->NamaAlbum) }}</h5>
                          </div>
                      </a>
                    </div>
              @empty
                  <p>Tidak ada album tersedia.</p>
              @endforelse
      </section>
  </ol>


        @if ($albums->total() > 12)
          <div class="paging">
            <div class="pagination">
              @if (!$albums->onFirstPage())
                <span class="previous">
                  <a href="{{ $albums->previousPageUrl() }}" rel="prev">Previous</a>
                </span>
              @endif

              @foreach ($albums->getUrlRange(1, $albums->lastPage()) as $page => $url)
                @if ($page == $albums->currentPage())
                  <span class="page current">{{ $page }}</span>
                @else
                  <span class="page"><a href="{{ $url }}" rel="next">{{ $page }}</a></span>
                @endif
              @endforeach

              @if ($albums->hasMorePages())
                <span class="next">
                  <a href="{{ $albums->nextPageUrl() }}" rel="next">Next</a>
                </span>
              @endif
            </div>
          </div>
        @endif
      </div>
    </div>
  </section>
</main>

@section('scripts')
<script>
  const albumPhotos = @json($albums->mapWithKeys(function ($album) {
      return [$album->AlbumId => $album->fotos->pluck('LokasiFile')->toArray()];
  }));

  function rotateAlbumPhotos() {
      for (let albumId in albumPhotos) {
          let photos = albumPhotos[albumId];
          if (photos.length > 1) {
              let imgElement = document.getElementById(`album-photo-${albumId}`);
              let currentIndex = parseInt(imgElement.getAttribute('data-index')) || 0;
              let nextIndex = (currentIndex + 1) % photos.length;

              imgElement.src = `/storage/${photos[nextIndex]}`;
              imgElement.setAttribute('data-index', nextIndex);
          }
      }
  }

  setInterval(rotateAlbumPhotos, 1000);
</script>
@endsection


  @endsection
