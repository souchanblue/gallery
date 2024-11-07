@extends('layouts.app')

@section('title', 'Register')

@php
$no_footer = true;
@endphp

@section('content')
<main class="index-content">
    <div class="container mt-5">
        <div class="row justify-content-center mt-5">
            <div class="corner-title">
                <h2 class="news-title text-center mb-5">Register</h2>
            </div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-6 col-md-12 mb-4">
                        <div class="form-wrapper" style="position: relative; width: 100%; max-width: 700px; padding: 40px; border-radius: 10px; border: 2px solid white; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.056);">
                            <section id="register-section">
                                <form action="{{ route('register') }}" method="POST">
                                    @csrf
                                    <div class="mb-3">
                                        <label for="name" class="form-label text-white d-flex">Name</label>
                                        <input type="text" name="name" value="{{ old('name') }}" class="form-control" placeholder="Enter your name" required style="background-color: transparent; color: white; border-color: white;">
                                        @error('name')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <label for="username" class="form-label text-white d-flex">Username</label>
                                        <input type="text" name="username" value="{{ old('username') }}" class="form-control" placeholder="Enter your username" required style="background-color: transparent; color: white; border-color: white;">
                                        @error('username')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <label for="email" class="form-label text-white d-flex">Email</label>
                                        <input type="email" name="email" value="{{ old('email') }}" class="form-control" placeholder="Enter your email" required style="background-color: transparent; color: white; border-color: white;">
                                        @error('email')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <label for="fullname" class="form-label text-white d-flex">Nama Lengkap</label>
                                        <input type="text" name="nama_lengkap" value="{{ old('nama_lengkap') }}" class="form-control" placeholder="Enter your full name" required style="background-color: transparent; color: white; border-color: white;">
                                        @error('nama_lengkap')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <label for="address" class="form-label text-white d-flex">Alamat</label>
                                        <input type="text" name="alamat" value="{{ old('alamat') }}" class="form-control" placeholder="Enter your address" style="background-color: transparent; color: white; border-color: white;">
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label text-white d-flex">Password</label>
                                        <input type="password" name="password" class="form-control" placeholder="Enter your password" required style="background-color: transparent; color: white; border-color: white;">
                                        @error('password')
                                            <small class="text-danger">{{ $message }}</small>
                                        @enderror
                                    </div>
                                    <div class="mb-3">
                                        <label for="password_confirmation" class="form-label text-white d-flex">Confirm Password</label>
                                        <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm your password" required style="background-color: transparent; color: white; border-color: white;">
                                    </div>
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-primary" style="background-color: white; color: black; border: none; transition: background-color 0.3s ease;">Register</button>
                                    </div>
                                    <div class="text-center mt-3">
                                        <small class="d-block text-center" style="font-size: 13px">Already have an account? <a href="{{ route('login') }}" style="text-decoration: underline; font-size: 15px; font-weight: bold;">Login Here!</a></small>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection


@section('scripts')
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
@endsection
