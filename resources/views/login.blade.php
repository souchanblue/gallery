@extends('layouts.app')

@section('title', 'Login')

@php
$no_footer = true;
@endphp

@section('content')
<main class="index-content">
    <div class="container mt-5">
        <div class="row justify-content-center mt-5">
            <div class="corner-title">
                <h2 class="news-title text-center mb-5">Login</h2>
            </div>
            <div class="container">
                <div class="row justify-content-center">

                    <div class="col-lg-6 col-md-12 mb-4">

                        <div class="form-wrapper" style="position: relative; width: 100%; max-width: 700px; padding: 40px; border-radius: 10px; border: 2px solid white; backdrop-filter: blur(10px); background-color: rgba(255, 255, 255, 0.056);">

                            <section id="login-section">
                                <form action="{{ route('login') }}" method="POST">
                                    @csrf
                                    <div class="mb-3">
                                        <label for="username" class="form-label text-white d-flex">Username</label>
                                        @error('username')
                                            <small>{{ $message }}</small>
                                        @enderror
                                        <input type="text" name="username" class="form-control" id="username" placeholder="Enter your username" required style="background-color: transparent; color: white; border-color: white;">
                                    </div>
                                    <div class="mb-3">
                                        <label for="password" class="form-label text-white d-flex">Password</label>
                                        @error('password')
                                            <small>{{ $message }}</small>
                                        @enderror
                                        <input type="password" name="password" class="form-control" id="password" placeholder="Enter your password" required style="background-color: transparent; color: white; border-color: white;">
                                    </div>
                                    <div class="d-grid">
                                        <button type="submit" class="btn btn-primary" style="background-color: white; color: black; border: none; transition: background-color 0.3s ease;">Login</button>
                                    </div>
                                    <div class="text-center mt-3">
                                        <small class="d-block text-center" style="font-size: 13px">Don't have an account? <a href="{{ route('register') }}" style="text-decoration: underline; font-size: 15px; font-weight: bold;">Register Here!</a></small>
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
@endsection
