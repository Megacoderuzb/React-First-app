import React from "react";
import image1 from "../assets/images/icons/award.svg";
import image2 from "../assets/images/icons/headphones.svg";
import image3 from "../assets/images/icons/verified_user.svg";

const Feature = () => {
  return (
    <>
      <section id="feature">
        <div class="flex">
          <div class="txt">
            <h5>FEATURE</h5>
            <h2>The benefit of using our platform</h2>
          </div>
          <div class="cards">
            <div class="card1">
              <span>
                <img src={image1} alt="award" />
              </span>

              <h3>Professional & Fast</h3>
              <p>
                Search and hire the most talented freelancers to match your
                needs. No matter what you need done, we've got the perfect
                freelancer for you.
              </p>
            </div>

            <div class="card6">
              <span>
                <img src={image2} alt="headphones" />
              </span>

              <h3>24/7 support</h3>
              <p>
                You have any concerns or questions? Don’t worry, we have our
                support team to help you at anytime and anywhere.
              </p>
            </div>

            <div class="card7">
              <span>
                <img src={image3} alt="user" />
              </span>

              <h3>Safe & Secure</h3>
              <p>
                We know that safety is the most important thing for our
                customer, so all of our payments are processed instantly and
                securely.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Feature;
