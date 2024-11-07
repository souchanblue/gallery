<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // Menampilkan halaman registrasi
    public function showRegisterForm()
    {
        return view('register');
    }

    // Proses registrasi pengguna baru
    public function register(Request $request)
    {
        $request->validate([
            'username' => 'required|unique:users|max:8', // Maksimum 8 karakter
            'password' => 'required|min:6',
            'email' => 'required|email|unique:users|regex:/^[a-zA-Z0-9._%+-]+@gmail\.com$/i', // Email harus @gmail.com
            'nama_lengkap' => 'required',
            'alamat' => 'nullable',
            'name' => 'required',
        ]);

        // Tentukan apakah pengguna pertama kali yang mendaftar
        $isFirstUser = User::count() === 0;

        // Jika ini adalah pengguna pertama, set as admin
        $isAdmin = $isFirstUser ? true : false;

        // Membuat pengguna baru
        User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'email' => $request->email,
            'nama_lengkap' => $request->nama_lengkap,
            'alamat' => $request->alamat,
            'name' => $request->name,
            'is_admin' => $isAdmin,
        ]);

        return redirect()->route('login')->with('success', 'Registration successful, please login.');
    }

    // Menampilkan halaman login
    public function showLoginForm()
    {
        return view('login');
    }

    // Proses login
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required',
        ]);

        // Jika login berhasil
        if (Auth::attempt(['username' => $request->username, 'password' => $request->password])) {
            $user = Auth::user();
            if ($user->is_admin) {
                return redirect()->route('foto.index')->with('success', 'Logged in as admin successfully.');
            } else {
                return redirect()->route('foto.index')->with('success', 'Logged in successfully.');
            }
        }

        // Jika login gagal
        return back()->withErrors(['username' => 'Invalid credentials.'])->withInput();
    }

    // Logout pengguna
    public function logout()
    {
        Auth::logout();
        return redirect()->route('login')->with('success', 'Logged out successfully.');
    }
}   