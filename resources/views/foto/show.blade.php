@extends('layouts.app_user')

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

    .like-button-container {
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 1;
    }

    .like-button {
        background: none;
        border: none;
        padding: 5px;
        cursor: pointer;
        transition: transform 0.2s ease;
    }

    .like-button i {
        font-size: 3em;
        color: rgb(211, 210, 210);
        transition: color 0.2s ease;
    }

    .like-button.liked i {
        color: red;
    }

    .like-button:hover {
        transform: scale(1.2);
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
            <a href="{{ route('foto.index')}}" class="btn btn-secondary mb-4" style="color: #fff; background: transparent; font-size: 17px; border-radius: 20px; border: 1px solid #fff; position: relative;">Kembali</a>
            <h2 class="truncate-title corner-title-heading ">{{ $foto->JudulFoto }}</h2>
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
                            <!-- Tombol Like -->
                            <div class="like-button-container">
                                <form action="{{ route('foto.like', $foto->FotoId)}}" method="POST">
                                    @csrf
                                    <button class="like-button {{ $liked ? 'liked' : '' }}" 
                                        type="submit"
                                        id="like-btn">
                                        <i class="fas fa-heart"></i><br>
                                        <span id="like-count">{{ $foto->likes->count() }}</span> <!-- Menampilkan jumlah like -->
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-8 music">
                        <div class="meta">
                            <span class="music-category">{{ $foto->album->NamaAlbum ?? 'Tanpa Album' }}</span> 
                            <span class="time">{{ \Carbon\Carbon::parse($foto->TanggalUnggah)->format('d M Y') }}</span>
                        </div>
                        <div class="d-flex flex-column">
                            <div class="music-product-title">
                                <h5 class="music-category ms-1 bg-warning">{{ $foto->user->username ?? 'Pengguna Tidak Dikenal' }}</h5>
                            </div>
                            <button class="text-start" data-bs-toggle="collapse" data-bs-target="#likeList" aria-expanded="false" aria-controls="likeList" style="background: none; border: none; padding: 0;">
                                <span style="color: red; text-decoration: underline;"><i class="fas fa-heart"></i></span> 
                                {{-- <span style="color: red" id="like-count">{{ $foto->likes->count() }}</span>  --}}
                                <i class="bi bi-chevron-down"></i>
                            </button>
                            <div class="collapse" id="likeList">
                                <ul class="list-unstyled">
                                    @foreach ($likes as $like)
                                    <li>
                                        <span href="" class="text-primary">
                                            {{ $like->user->username }} <!-- Nama pengguna -->
                                        </span>
                                        <span class="text-white">
                                            {{ \Carbon\Carbon::parse($foto->TanggalUnggah)->format('d M Y') }}
                                        </span>
                                    </li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>
                        <div class="music-product-disc">
                            <ol class="track-list list-unstyled">
                                <li class="track-list-item">
                                    <form action="{{ route('foto.komentar.store', $foto->FotoId) }}" method="POST">
                                        @csrf
                                        <input name="isi" class="track-title" placeholder="Masukan komentar..." required
                                            style="background: transparent; color: #ffffff; border: transparent; border-radius: 5px; font-size:23px; padding: 5px; width: 80%; outline: none;" />
                                        <button type="submit" class="btn" style="color: #fff; background: transparent; font-size: 17px; border-radius: 20px; border: 1px solid #fff; float: right;">
                                            Kirim
                                        </button>
                                    </form>
                                </li>
                            </ol>
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
                                        
                                        @if(auth()->id() === $komentar->UserId || auth()->user()->is_admin == 1)
                                            <form action="{{ route('foto.komentar.destroy', ['fotoId' => $foto->FotoId, 'komentarId' => $komentar->KomentarId]) }}" method="POST" style="display: inline;" onsubmit="return confirm('Apakah Anda yakin ingin menghapus komentar ini?');">
                                                @csrf
                                                @method('DELETE')
                                                <button type="submit" class="btnn" style="color: rgb(255, 255, 255); background: transparent; font-size: 7px; border-radius: 20px; border: 1px solid rgb(255, 255, 255); padding: 5px 10px; cursor: pointer; float: right;">
                                                    <i class="fas fa-trash"></i>
                                                </button>
                                            </form>
                                        @endif
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

@section('scripts')

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const likeButton = document.getElementById('like-btn');

        // Periksa apakah elemen likeButton ada di halaman sebelum menambahkan event listener
        if (likeButton) {
            likeButton.addEventListener('click', function() {
                const fotoId = this.getAttribute('data-id');
                const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

                // Mengirim request untuk toggle like/unlike
                fetch(`/foto/${fotoId}/like`, {
                    method: 'POST',
                    headers: {
                        'X-CSRF-TOKEN': csrfToken,
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => response.json())
                .then(data => {
                    if (data.status === 'liked' || data.status === 'unliked') {
                        // Refresh halaman setelah status like/unlike berhasil diperbarui
                        location.reload();
                    }
                })
                .catch(error => console.error('Error:', error));
            });
        }
    });
</script>

@endsection
