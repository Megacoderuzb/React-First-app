import React from "react";
import image from "../assets/images/icons/Logo.svg";
const navbar = () => {
  return (
    <>
      <header class="main-nav">
        <div class="container">
          <div class="flex">
            <div class="logo">
              <img src={image} alt="logo" />
              <h2>Wakanda</h2>
            </div>
            <div class="navigation">
              <ul class="navbar">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">How it works</a>
                </li>
                <li>
                  <a href="#">For Freelancer</a>
                </li>
                <li>
                  <a href="#" class="main-btn">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default navbar;
