    @extends('layouts.app')

    @section('content')
    <div class="container">
        <h2>Daftar Album</h2>
        <div class="list-group">
            @foreach($albums as $album)
                <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <div>
                        <h5 class="mb-1">{{ $album->NamaAlbum }}</h5>
                        <p class="mb-1">{{ $album->Deskripsi }}</p>
                        <small>Dibuat pada: {{ $album->TanggalDibuat }}</small>
                    </div>
                    <div>
                        <a href="#" onclick="event.preventDefault(); document.getElementById('delete-form-{{ $album->AlbumId }}').submit();" class="btn btn-danger">Delete</a>
    <form id="delete-form-{{ $album->AlbumId }}" action="{{ route('album.destroy', ['id' => $album->AlbumId]) }}" method="POST" style="display: none;">
        @csrf
        @method('DELETE')
    </form>

                    </div>
                </div>
            @endforeach
        </div>
    </div>
    @endsection
