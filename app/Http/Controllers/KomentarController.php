<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\KomentarFoto;

class KomentarController extends Controller
{
    public function destroy($fotoId, $komentarId)
    {
        $komentar = KomentarFoto::findOrFail($komentarId);
    
        // Cek id
        if (Auth::id() !== $komentar->UserId) {
            return redirect()->back()->withErrors('Anda tidak memiliki izin untuk menghapus komentar ini.');
        }
    
        $komentar->delete();
        return redirect()->back()->with('success', 'Komentar berhasil dihapus.');
    }
}