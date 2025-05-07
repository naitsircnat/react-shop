export default function Footer() {
  return (
    <>
      <footer class="container-fluid bg-black p-5">
        <div class="row1">
          <div class="about">
            <p class="footer-subtitle">FUR-REAL PIZZA</p>
            <p class="footer-description">
              Fur-Real Pizza delivers happiness with vet-approved, all-natural
              ingredients. From cheesy to meaty favorites, each pizza is made
              with love and delivered fresh.
            </p>
          </div>

          <div class="quicklinks">
            <p class="footer-subtitle">QUICK LINKS</p>
            <p>
              <a href="our-story.html">Our Story</a>
            </p>
            <p>
              <a href="our-selection.html">Our Selection</a>
            </p>
            <p>
              <a href="order-now.html">Order Now</a>
            </p>
          </div>

          <div class="contact">
            <p class="footer-subtitle">CONTACT</p>
            <p>
              <a href="#">fur-real@pizza.com</a>
            </p>
            <p>+65 1234 5678</p>
          </div>
        </div>

        <div class="row2">
          <div class="socials">
            <div class="tiktok-logo">
              <a href="#">
                {" "}
                <img src="images/tiktok.webp" style={{ width: "21px" }} />
              </a>
            </div>
            <div class="facebook-logo">
              <a href="#">
                {" "}
                <img src="images/facebook.png" style={{ width: "25px" }} />
              </a>
            </div>
            <div class="instagram-logo">
              <a href="#">
                {" "}
                <img src="images/instagram.png" style={{ width: "21px" }} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
