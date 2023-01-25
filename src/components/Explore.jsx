import React from "react";
import image1 from "../assets/images/explore.png";

const Explore = () => {
  return (
    <>
      <section id="explore">
        <div class="container">
          <div class="flex">
            <div class="explore-txt">
              <h2>Explore and hire talent from our platform</h2>
              <p>
                We've got experts for every industry - all under one roof! You
                can find everything from WordPress developers to Graphic
                designers to copywriters and many more at Wakanda.
              </p>
              <a href="#" class="main-btn">
                Explore now
              </a>
            </div>
            <div class="explore-img">
              <img src={image1} alt="ex" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Explore;
