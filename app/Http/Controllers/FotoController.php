<?php
namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Foto;
use App\Models\Album;
use App\Models\LikeFoto;
use App\Models\KomentarFoto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;



class FotoController extends Controller
{
    // Menampilkan halaman form tambah foto
    public function create()
    {
        // Mengambil semua album untuk ditampilkan di dropdown
        $albums = Album::all();
        return view('foto.create', compact('albums'));
    }

// Menampilkan semua album di halaman album dengan foto yang terkait dan pagination
public function indexAlbums()
{
    // Mengambil semua album dan foto
    $albums = Album::with('fotos')->paginate(12);
    
    foreach ($albums as $album) {
        $album->NamaAlbum = strtoupper($album->NamaAlbum);
    }
    
    return view('foto.albums', compact('albums'));
}


    // Menampilkan foto
    public function showAlbum($id)
    {
        // Mengambil data album berdasarkan id album
        $album = Album::where('AlbumId', $id)->firstOrFail();
        $album->NamaAlbum = strtoupper($album->NamaAlbum);
    
        // Mengambil semua foto yang ada di album dengan id
        $fotos = Foto::where('AlbumId', $id)->with('album', 'user')->paginate(12); // 10 photos per page
    
        // Mengirim data album dan fotos ke view
        return view('foto.album_detail', compact('fotos', 'album'));
    }
    

// menambahkan foto ke dalam database
public function store(Request $request)
{
    $request->validate([
        'LokasiFile' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        'JudulFoto' => 'required|string|max:255',
        'DeskripsiFoto' => 'nullable|string',
        'AlbumId' => 'required|exists:album,AlbumId'
    ]);

    $path = $request->file('LokasiFile')->store('img', 'public');

    // Menyimpan data foto dengan TanggalUnggah otomatis
    Foto::create([
        'LokasiFile' => $path, // menyimpan file foto yang diunggah dalam kolom LokasiFile di atas
        'JudulFoto' => $request->JudulFoto, // Mengambil dari input yang di isi
        'DeskripsiFoto' => $request->DeskripsiFoto,
        'TanggalUnggah' => Carbon::now()->toDateString(), // Mengambil tanggal saat ini menggunakan Carbon dan menyimpannya dalam kolom TanggalUnggah
        'AlbumId' => $request->AlbumId, // Mengambil AlbumId dari input pengguna dan menyimpannya dalam kolom AlbumId untuk menghubungkan foto dengan album tertentu
        'UserId' => Auth::id() // Mengambil UserId dari pengguna yang sedang login dan menyimpannya dalam kolom UserId
    ]);
    
    return redirect()->route('foto.user_gallery')->with('success', 'Foto berhasil ditambahkan.');
}

// Fungsi untuk menampilkan halaman pembuatan album baru
public function newAlbum()
{
    // Mengambil semua album dari database
    $albums = Album::all();

    // Mengembalikan view dengan variabel $albums
    return view('foto.new_album', compact('albums'));
}

public function storeAlbum(Request $request)
{
    // Validasi input untuk memastikan nama album sesuai aturan
    $request->validate([
        'NamaAlbum' => 'required|string|max:255',
        'DeskripsiAlbum' => 'nullable|string'
    ]);

    // Mengecek apakah album dengan nama yang sama sudah ada
    $existingAlbum = Album::where('NamaAlbum', $request->NamaAlbum)->first();

    if ($existingAlbum) {
        return redirect()->back()->with('error', 'Album dengan nama tersebut sudah ada.');
    }

    // Membuat album baru dengan TanggalDibuat menggunakan now()
    $album = Album::create([
        'NamaAlbum' => $request->NamaAlbum,
        'Deskripsi' => $request->DeskripsiAlbum ?? '',
        'UserId' => Auth::id(),
        'TanggalDibuat' => now() // Set the creation date manually
    ]);

    // Redirect ke halaman foto.create setelah album berhasil ditambahkan
    return redirect()->route('foto.create')->with('success', 'Album baru berhasil ditambahkan.')
        ->with('new_album', $album); // Menambahkan album baru ke session
}

    // Menampilkan semua foto pada halaman Dashboard
    public function index()
    {
        // Mengambil semua foto terbaru dengan data album dan pengguna
        $fotos = Foto::with(['album', 'user'])->paginate(12); // 12 photos per page
        return view('foto.index', compact('fotos'));
    }

    // Menampilkan foto pengguna yang sedang login pada halaman Gallery
    public function userGallery()
    {
        // Mengambil foto yang diunggah oleh pengguna yang sedang login
        $fotos = Foto::where('UserId', Auth::id())->orderBy('created_at', 'desc')->paginate(12);

        return view('foto.user_gallery', compact('fotos'));
    }

// Menampilkan detail foto, termasuk daftar pengguna yang like
public function show($id)
{
    // Ambil foto berdasarkan ID
    $foto = Foto::findOrFail($id);

    // Cek apakah pengguna sudah memberi 'like' pada foto ini
    $liked = LikeFoto::where('FotoId', $id)
                    ->where('UserId', Auth::id())
                    ->exists();

    // Ambil pengguna yang memberi 'like' pada foto ini
    $likes = LikeFoto::where('FotoId', $id)
                    ->with('user') // Memuat informasi pengguna yang memberi like
                    ->get();

    // Kembalikan data foto dan likes ke view
    return view('foto.show', compact('foto', 'liked', 'likes'));
}

    // Menambah atau menghapus like pada foto
    public function like($id)
{
    $userId = Auth::id();

    // Jika pengguna belum autentikasi
    if (!$userId) {
        return back()->withErrors(['message' => 'User not authenticated.']);
    }

    // Periksa apakah pengguna sudah like foto ini sebelumnya
    $like = LikeFoto::where('FotoId', $id)->where('UserId', $userId)->first();

    if ($like) {
        // Menghapus like jika sudah ada
        $like->delete();
        return back()->with('status', 'unliked');
    } else {
        // Menambahkan like jika belum ada
        LikeFoto::create([
            'FotoId' => $id,
            'UserId' => $userId,
            'TanggalLike' => now(),
        ]);
        // Mengarahkan kembali ke halaman foto dengan ID yang benar
        return redirect()->route('foto.show', ['id' => $id])->with('status', 'liked');
    }
}

    // Menampilkan foto yang sudah di-like oleh pengguna
    public function likedPhotos()
    {
        $userId = Auth::id();
        $likedFotos = LikeFoto::with('foto', 'foto.album', 'foto.user')
            ->where('UserId', $userId)
            ->get()
            ->pluck('foto');

        return view('foto.likes', ['fotos' => $likedFotos]);
    }

// edit foto
    public function edit($id)
{
    $foto = Foto::findOrFail($id);
    $albums = Album::all(); // Mendapatkan semua album untuk dropdown
    return view('foto.edit', compact('foto', 'albums'));
}

public function update(Request $request, $id)
{
    $request->validate([
        'JudulFoto' => 'required|string|max:255',
        'DeskripsiFoto' => 'required|string',
        'AlbumId' => 'required',
        'LokasiFile' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    $foto = Foto::findOrFail($id);

    // Update data
    $foto->JudulFoto = $request->JudulFoto;
    $foto->DeskripsiFoto = $request->DeskripsiFoto;
    $foto->AlbumId = $request->AlbumId;

    if ($request->hasFile('LokasiFile')) {
        // Hapus foto lama
        if (file_exists(public_path('storage/' . $foto->LokasiFile))) {
            unlink(public_path('storage/' . $foto->LokasiFile));
        }

        // Upload foto baru
        $path = $request->file('LokasiFile')->store('fotos', 'public');
        $foto->LokasiFile = $path;
    }

    $foto->save();

    return redirect()->route('foto.user_gallery')->with('success', 'Foto berhasil diperbarui.');
}


    // Menghapus foto dari database dan storage
    public function destroy($id)
    {
        $foto = Foto::findOrFail($id);

        // Menghapus file dari storage jika ada
        if (Storage::exists('public/' . $foto->LokasiFile)) {
            Storage::delete('public/' . $foto->LokasiFile);
        }

        // Menghapus foto dari database
        $foto->delete();

        return back()->with('success', 'Foto berhasil dihapus.');
    }

    // Menambahkan komentar pada foto
    public function storeKomentar(Request $request, $fotoId)
    {
        $request->validate([
            'isi' => 'required|string',
        ]);

        KomentarFoto::create([
            'FotoId' => $fotoId,
            'UserId' => Auth::id(),
            'IsiKomentar' => $request->isi,
            'TanggalKomentar' => now(),
        ]);

        return redirect()->back()->with('success', 'Komentar berhasil dikirim.');
    }

    // Menghapus komentar dari foto
    public function deleteKomentar($id)
    {
        $foto = Foto::findOrFail($id);

        if (Storage::exists('public/' . $foto->LokasiFile)) {
            Storage::delete('public/' . $foto->LokasiFile);
        }

        $foto->delete();

        return back()->with('success', 'Komentar berhasil dihapus.');
    }
}