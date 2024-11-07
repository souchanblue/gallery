@if (!isset($no_footer))

<footer  footer id="footer" class="footer" style="top: 0px;">
  <div class="footer-inner container">
    <div class="footer-inner-left">
      <h1 class="site-logo">
        <a href="{{ route('foto.index') }}" aria-label="tuki. Official Site">
          <img src="{{ asset('img/logo_sou_white.png') }}" class="logo" style="width: 100%; width: auto; max-width: 350px;" alt="Logo">
        </a>
      </h1>
      <ol class="sns-icons list-unstyled">
        <li class="social-list-item">
          <a href="https://www.github.com/souchanblue" aria-label="github" class="social-list-link"
            rel="noreferrer" target="_blank">
            <i class="fab fa-github"></i>
          </a>
        </li>
        <li class="social-list-item">
          <a href="https://twitter.com/bayyrds" aria-label="X" class="social-list-link" rel="noreferrer"
            target="_blank">
            <i class="fab fa-x-twitter"></i>
          </a>
        </li>
        <li class="social-list-item">
          <a href="https://www.tiktok.com/@shudenmagiwa" aria-label="tiktok" class="social-list-link"
            rel="noreferrer" target="_blank">
            <i class="fab fa-tiktok"></i>
          </a>
        </li>
        <li class="social-list-item">
          <a href="https://www.instagram.com/bayyrds_/" aria-label="instagram"
            class="social-list-link" rel="noreferrer" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ol>


      <div class="footer-text text-center hidden-xs hidden-sm">
        <p>
          We appreciate every work published in this gallery. All rights reserved. Please give likes and comments to
          support creators! </p>
        <p class="copyright">© 2024 Galery. ALL RIGHTS RESERVED.<br>powered by bayyrds.</p>
      </div>
    </div>
    <div class="footer-inner-right">
      <div class="footer-nav">
        <div class="nav-official">
          <ol class="menu-list official-menu-list list-unstyled" itemscope="itemscope"
            itemtype="http://www.schema.org/SiteNavigationElement">
            <li itemprop="name" class="menu-item">
              <a href="{{ route('foto.index') }}">
                <span class="menu-text">Home</span>
              </a>
            </li>
            <li itemprop="name" class="menu-item">
              <a href="{{ route('foto.user_gallery') }}">
                <span class="menu-text">Gallery</span>
              </a>
            </li>
            <li itemprop="name" class="menu-item">
              <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                  <span class="menu-text text-danger">Logout</span>
              </a>
              <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                  @csrf
              </form>
          </li>

          </ol>
        </div>
      </div>
      <ul class="footer-menu-list footer-menu list-unstyled">
        <li>
          <a href="">
          </a>
        </li>
      </ul>
    </div>
    <div class="footer-text text-center visible-xs visible-sm">
      <p>
      </p>
    </div>
  </div>
</footer>
@endif
