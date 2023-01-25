import React from "react";
import image1 from "../assets/images/icons/Airbnb.svg";
import image2 from "../assets/images/icons/Google.svg";
import image3 from "../assets/images/icons/Slack.svg";
import image4 from "../assets/images/icons/Netflix.svg";
import image5 from "../assets/images/icons/Amazon.svg";

const Partners = () => {
  return (
    <>
      <section id="partners">
        <div class="container">
          <img src={image1} alt="attr" />
          <img src={image2} alt="attr" />
          <img src={image3} alt="attr" />
          <img src={image4} alt="attr" />
          <img src={image5} alt="attr" />
        </div>
      </section>
    </>
  );
};
export default Partners;
