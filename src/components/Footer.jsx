import React from "react";
import image1 from "../assets/images/icons/Logo-footer.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="container">
          <div class="flex">
            <div class="left">
              <span class="footer-logo">
                <img src={image1} alt="footerlogo" />
                <h2>Wakanda</h2>
              </span>
              <span class="messengers">
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-dribbble"></i>
                <i class="bx bxl-twitter"></i>
                <i class="bx bxl-facebook"></i>
              </span>
              <p>Copyright &copy; 2022 Wakanda. All rights reserved</p>
            </div>

            <div class="right">
              <div class="company">
                <h3>Company</h3>

                <ul>
                  <li>About us</li>
                  <li>Blog</li>
                  <li>Contact Us</li>
                  <li>How it works</li>
                  <li>For freelancer</li>
                </ul>
              </div>

              <div class="support">
                <h3>Support</h3>
                <ul>
                  <li>Help center</li>
                  <li>Terms</li>
                  <li>Legal</li>
                  <li>Privacy policy</li>
                  <li>Status</li>
                </ul>
              </div>

              <form action="/login">
                <label for="email">Subscribe to our newsletter</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  id="email"
                />
                <i class="bx bx-send"></i>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
