<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>@yield('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0" />
    <link rel="icon" href="{{ asset('img/photo_haraguchi.jpg') }}" type="image/png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('css/application.css') }}" rel="stylesheet">
    @yield('styles')
</head>

<body id="musics" class="index customize-components is-loaded is-pc">
    <div class="contents-wrapper">
        <div id="particles-js">
            <canvas class="particles-js-canvas-el" width="1310" height="782" style="width: 100%; height: 100%"></canvas>
        </div>

        <div class="cursor" style="top: 74px; left: 1304px"></div>
        <div class="follower" style="top: 74px; left: 1304px"></div>

        <div id="page-top"></div>

        <header id="header" class="header">
            <div class="header-inner">
                <h1 class="site-logo">
                    <a href="{{ route('home_guest') }}" aria-label="">
                        <img src="{{ asset('img/logo_sou_white.png') }}" class="logo" style="width:170px; height:auto;" alt="Logo">
                    </a>
                </h1>
                <nav class="nav">
                    <div class="nav-wrapper">
                        <div id="particles-js-menu">
                            <canvas class="particles-js-canvas-el" width="1067" height="782" style="width: 100%; height: 100%;"></canvas>
                        </div>
                        <div class="nav-header">
                            <h2 class="site-logo">
                                <a href="{{ route('home_guest') }}" aria-label="logo">
                                    <img src="{{ asset('img/logo_sou_white.png') }}" class="logo" style="width:170px; height:auto;" alt="Logo">
                                </a>
                            </h2>
                        </div>
                        <div class="nav-official">
                            <ol class="menu-list official-menu-list list-unstyled" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
                                <li itemprop="name" class="menu-item">
                                    <a href="{{ route('home_guest') }}">
                                        <span class="menu-text">Home</span>
                                    </a>
                                </li>
                                <li itemprop="name" class="menu-item">
                                    <a href="{{ route('login') }}">
                                        <span class="menu-text">Login</span>
                                    </a>
                                </li>
                                <li itemprop="name" class="menu-item">
                                    <a href="{{ route('register') }}">
                                        <span class="menu-text">Register</span>
                                    </a>
                                </li>
                            </ol>
                        </div>
                        <div class="nav-footer">
                            <ol class="sns-icons list-unstyled"></ol>
                        </div>
                    </div>
                </nav>
                <div class="header-menu-fixed">
                    <div class="header-login-btn"></div>
                    <button type="button" class="btn-modal-menu" data-scroll="false" aria-label="メニュー">
                        <span class="btn-nav-icon-text"></span>
                        <span class="btn-nav-icon btn-nav-icon-top">
                            <span class="btn-nav-icon-line"></span>
                            <span class="btn-nav-icon-line"></span>
                            <span class="btn-nav-icon-line"></span>
                            <span class="btn-nav-icon-line"></span>
                            <span class="btn-nav-icon-line"></span>
                            <span class="btn-nav-icon-line"></span>
                        </span>
                        <span class="btn-nav-icon btn-nav-icon-bottom">
                            <span class="btn-nav-icon-line"></span>
                            <span class="btn-nav-icon-line"></span>
                            <span class="btn-nav-icon-line"></span>
                            <span class="btn-nav-icon-line"></span>
                            <span class="btn-nav-icon-line"></span>
                            <span class="btn-nav-icon-line"></span>
                        </span>
                    </button>
                </div>
            </div>
        </header>

        <div class="top-contents">
            <div class="top-contents-inner">
                <div id="particles-js">
                    <canvas class="particles-js-canvas-el" width="1067" height="782"></canvas>
                </div>
                @yield('content') <!-- Main Content -->

                <!-- Footer Section -->
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="../js/background.js" type="text/javascript"></script>
            <script src="../js/cursor.js" type="text/javascript"></script>
            <script> 
            
            @if(session('success'))
            Swal.fire({
                icon: "success",
                title: "BERHASIL",
                text: "{{ session('success') }}",
                showConfirmButton: false,
                timer: 2000
            });
        @elseif(session('error'))
            Swal.fire({
                icon: "error",
                title: "GAGAL!",
                text: "{{ session('error') }}",
                showConfirmButton: false,
                timer: 2000
            });
            @endif
</script>

            <div style="visibility: hidden; position: absolute; top: 0px">S</div>
            @yield('scripts')
            @include('user_login.footer')
        </div>
    </div>
</body>
</html>
