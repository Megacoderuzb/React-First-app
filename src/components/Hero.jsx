import React from "react";
import image from "../assets/images/showcase.png";
const Hero = () => {
  return (
    <>
      <section id="hero">
        <div class="container">
          <div class="flex">
            <div class="portion">
              <h1>Recruit top talented freelancer for your business!</h1>
              <p>
                Connect you to thoudsands of talented freelancer from any
                industry. You can have the best people in just few simple steps.
              </p>
              <a href="#" class="main-btn">
                Get Started
              </a>
            </div>
            <div class="main-img">
              <img src={image} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
