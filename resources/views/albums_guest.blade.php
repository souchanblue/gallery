  @extends('layouts.app')

  @section('title', 'GALLERY | Home')

  @section('content')
  @php
$no_footer = true;
@endphp
<style>
  .music-list-thumb {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    overflow: hidden;
  }

  .music-list-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    filter: brightness(0.3);
  }

  .album-info-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent background for readability */
    color: #fff;
    text-align: center;
    z-index: 1; /* Memastikan overlay berada di atas gambar */
  }

  .album-info-overlay h5 {
    font-size: 17px;
    margin: 0;
  }

  .album-info-overlay p {
    font-size: 14px;
    margin: 5px 0 0;
  }

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
        <ol class="music-list list-unstyled">
          @forelse($albums as $album)
            <li class="music-list-item fadein">
              <a href="{{ route('album_detail_guest', ['id' => $album->AlbumId]) }}" aria-label="{{ $album->NamaAlbum }}" style="display: block; height: 100%;">
                <div class="music-list-thumb thumb">
                  <img id="album-photo-{{ $album->AlbumId }}" alt="{{ $album->NamaAlbum }}" 
                       class="img-responsive center-block" 
                       src="{{ asset('storage/' . ($album->fotos->count() > 0 ? $album->fotos->first()->LokasiFile : 'default.jpg')) }}" 
                       loading="lazy" 
                       style="width: 100%; height: auto; object-fit: cover;" 
                       data-index="0" />
                  <!-- Overlay for Album Title and Description -->
                  <div class="album-info-overlay">
                    <h5>{{ strtoupper($album->NamaAlbum) }}</h5>
                    <p>{{ $album->Deskripsi }}</p>
                  </div>
                </div>
              </a>
              @empty
            <p>Tidak ada album tersedia.</p>
          @endforelse
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
