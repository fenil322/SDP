import React from "react";
import Header from "./Header";
import "./About.css";
import FooterPage from "./FooterPage";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const About = () => {
  return (
    <>
      <Header />
      <div className="mx-auto w-5/6 text-center my-10">
        <div className="text-blue-500 text-bold my-5">
          About Us
        </div>
        <h2 className="faheading">
          We Adcosign,A creator's platform to meet brands and crack awesome
          deals.
        </h2>
      </div>

      {/* <div className="untree_co-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-7 text-center">
              <h2 className="line-bottom text-center mb-4">Our Team</h2>
              <p>
                Our Team works together to build the site and provide the better
                expierience to user.User can grow more and more and make
                progress.
              </p>
            </div>
          </div>
          <div className="flex w-5/6 mx-auto justify-between">
            <div className="flex flex-col mb-6  ">
              <div className=" text-center">
                <div className="mb-4 img-2"></div>
                <div className="person-body">
                  <h3 className="staff-name">Fenil Savani</h3>
                  <span className="block position mb-4">
                    Full stack Developer
                  </span>
                  <p className="mb-4">
                    Perfection in design is achieved not when there is nothing
                    more to add, but rather when there is nothing more to take
                    away.
                  </p>
                  <div style={{ color: "#5cccc9" }}>
                    <FacebookIcon /> &nbsp;
                    <TwitterIcon /> &nbsp;
                    <LinkedInIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mb-6  ">
              <div className=" text-center">
                <div className="mb-4 img-3"></div>
                <div className="person-body">
                  <h3 className="staff-name">Abhishek Thummar</h3>
                  <span className="block position mb-4">
                    Full stack Developer
                  </span>
                  <p className="mb-4">
                    Without requirements or design, programming is the art of
                    adding bugs to an empty text file.
                  </p>
                  <div style={{ color: "#5cccc9" }}>
                    <FacebookIcon /> &nbsp;
                    <TwitterIcon /> &nbsp;
                    <LinkedInIcon />
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div> */}
      <div className="untree_co-section mt-20 w-5/6 mx-auto">
        <div className="testimonial-grid">
          <div
            className="testimonial-image img-4"
            data-aos="fade-right"
            data-aos-delay="100"
          ></div>
          <div
            className="testimonial-inner bg-sky-400"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <blockquote>
              &ldquo;Years of Strong Influencer Relationships and Campaign Experience Deliver Powerful Results to Our Clients.&rdquo;
              <div className="flex space-x-5">

                <div className="person-image mt-3 d-flex align-items-center">
                  <img
                    src="https://res.cloudinary.com/djhql8xzq/image/upload/v1680167039/fenil1_edwhqd.jpg"
                    alt="CEO"
                    className="img-fluid"
                  />
                  <div>
                    <span className="name">Fenil Savani</span>
                    {/* <span className="position">Founder</span> */}
                  </div>
                </div>
                <div className="person-image mt-3 d-flex align-items-center">
                  <img
                    src="https://res.cloudinary.com/djhql8xzq/image/upload/v1680166879/shwet_ckllt1.jpg"
                    alt="CEO"
                    className="img-fluid"
                  />
                  <div>
                    <span className="name">Swetangi Satasiya</span>
                    {/* <span className="position">Founder</span> */}
                  </div>
                </div>
              </div>

            </blockquote>
          </div>
        </div>
      </div>

      <FooterPage />
    </>
  );
};

export default About;
