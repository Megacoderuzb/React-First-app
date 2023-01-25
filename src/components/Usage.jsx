import React from "react";
import image1 from "../assets/images/window.png";

const Usage = () => {
  return (
    <>
      <section id="usage">
        <div class="container">
          <div class="flex">
            <div class="usage-img">
              <img src={image1} alt="peoples" />
            </div>
            <div class="usage-text">
              <h2>Wakanda is an easy platform to find talent</h2>
              <ol>
                <li>
                  <span>1</span> Sign in to our website
                </li>
                <li>
                  <span>2</span> Fill out neccesary information
                </li>
                <li>
                  <span>3</span> Discover thoudsands of freelancers
                </li>
                <li>
                  <span>4</span> View freelancer’s profile and hire
                </li>
                <li>
                  <span>5</span> Complete payment & it’s time to work!
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Usage;
