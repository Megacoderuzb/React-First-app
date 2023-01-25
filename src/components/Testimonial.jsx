import React from "react";
import image1 from "../assets/images/Avatar.png";
import image2 from "../assets/images/ggg.png";
import image3 from "../assets/images/ava.png";
import image4 from "../assets/images/lll.png";
import image5 from "../assets/images/vatar.png";
import image6 from "../assets/images/avat.png";

const Testimonial = () => {
  return (
    <>
      <section id="testimonial">
        <div class="container">
          <div class="flex">
            <div class="text">
              <h5>TESTIMONIAL</h5>
              <h2>See what they’re saying about us</h2>
            </div>
            <div class="cards">
              <div class="card1 card-userss">
                <div>
                  <div class="user">
                    <img src={image1} alt="user" />
                    <h4>Cara Bedford</h4>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <p>
                    I have been using Wakanda for quite some time now and I have
                    to say it has been the best freelance hiring platform that
                    I've used. The quality of freelancers on this site is very
                    high and they're totally reliable. I would highly recommend
                    it!
                  </p>
                  </div>
                  
                </div>

                <div>
                  <div class="user">
                    <img src={image2} alt="user" />
                    <h4>Kathryn Murphy</h4>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <p>
                    One of the best things about Wakanda is that it really
                    simplifies the process of finding and hiring people. The
                    quality is good as well, every freelancer I've hired has
                    been high-quality and professional. I would recommend this
                    to anyone who needs a freelancer.
                  </p>
                  </div>
                  
                </div>
              </div>
              <div class="card2 card-userss">
                <div>
                  <div class="user">
                    <img src={image3} alt="user" />
                    <h4>Robert Fox</h4>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <p>
                    I’m so happy because the freelance talent we work with are
                    more productive than we have ever thought. Recommend for
                    people who want to find professional freelancer on this
                    platform.
                  </p>
                  </div>
                  
                </div>

                <div>
                  <div class="user">
                    <img src={image4} alt="user" />
                    <h4>Esther Howard</h4>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  <p>
                    Have used a lot of freelance hiring platforms, but none
                    compare to Wakanda. The quality of freelancers that I can
                    find here is unmatched and the service is top-notch. The
                    customer service is also excellent, which cannot be said for
                    my previous experiences in using other apps.
                  </p>
                  </div>
                </div>
              </div>
              <div class="card3 card-userss">
                <div>
                  <div class="user">
                    <img src={image5} alt="user" />
                    <h4>Albert Flores</h4>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  <p>
                    I am happy to say that I have hired a couple of freelancers
                    through Wakanda and they are high-quality ones. Working with
                    them is not just easier; it has also been more effective.
                    Having found a great freelance team, I cannot imagine
                    switching to any other hiring platform.
                  </p>
                  </div>

                </div>

                <div>
                  <div class="user">
                    <img src={image6} alt="user" />
                    <h4>Eleanor Pena</h4>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <p>
                    I have used a number of different freelance hiring platforms
                    and none come close to Wakanda. The quality of the
                    freelancers on here is top notch and it's easy to browse
                    through the listings. I've been using it for six months now
                    and I've found my perfect freelancer without any regrets
                    whatsoever.
                  </p>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Testimonial;
