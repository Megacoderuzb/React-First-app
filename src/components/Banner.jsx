import React from "react";
import image1 from "../assets/images/women.png";

const Banner = () => {
  return (
    <>
      <section id="last">
        <div class="container">
          <div class="flex">
            <div class="last-img">
              <img src={image1} alt="women" />
            </div>
            <div class="last-txt">
              <h5>WHAT ARE YOU WAITING FOR?</h5>
              <h2>Find the talent to get your business growing</h2>
              <a href="#" class="main-btn">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
