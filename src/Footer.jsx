import { Link } from "wouter";

export default function Footer() {
  return (
    <>
      <footer class="container-fluid bg-black p-5">
        <div class="row1">
          <div class="about">
            <p class="footer-subtitle">THE ARTISAN CUP</p>
            <p class="footer-description">
              Bringing you premium, handpicked coffee and tea from around the
              world. Crafted for those who savor quality in every sip.
            </p>
          </div>

          <div class="quicklinks">
            <p class="footer-subtitle">QUICK LINKS</p>
            <p>
              <Link href="/">Home</Link>
            </p>
            <p>
              <Link href="/products">Shop</Link>
            </p>
          </div>

          <div class="contact">
            <p class="footer-subtitle">CONTACT</p>
            <p>
              <a href="#">hello@artisancup.com</a>
            </p>
            <p>+65 1234 5678</p>
          </div>
        </div>
      </footer>
    </>
  );
}
