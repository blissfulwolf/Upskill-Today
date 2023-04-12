import React from "react";
import { Carousel } from "react-bootstrap";
import ImgAbout1 from "../../images/ImgAbout1.jpg";
import ImgAbout2 from "../../images/ImgAbout2.jpg";
import WhatIsUpskillToday from "../../images/WhatIsUpskillToday.png";
import WhyUpskill from "../../images/Why Upskill Today.png";

import "./aboutUsCarousel.css";

const AboutUsCarousel = () => {
  return (
    <Carousel className="about-section">
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={ImgAbout2} alt="About Us 2" />
        <Carousel.Caption>
          <h1 className="fw-bold fs-1 about-title">About Us</h1>
          <p className="fw-bold fs-4 about-description">
            An innovative and highly curated ​Hire, Upskill & Deploy Program
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img className="d-block w-100" src={ImgAbout1} alt="About Us 1" />
        <Carousel.Caption>
          <h1 className="fw-bold fs-1 about-title">Our Vision</h1>
          <p className="fw-bold fs-4 about-description">
            To create a talent pool for Innovative Digital Transformation
            initiatives, Locally.
          </p>
          <h1 className="fw-bold fs-1 about-title">Our Mission</h1>
          <p className="fw-bold fs-4 about-description">
            Provide Aspiring candidates with a launch pad into a successful and
            well-paid career for Digital Transformation.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-50"
          src={WhatIsUpskillToday}
          alt="What Is Upskill?"
        />
        <Carousel.Caption>
          <h1
            className="fw-bold fs-1 about-title1"
            style={{ marginLeft: "60%" }}
          >
            What is Upskilled Today?
          </h1>
          <p
            className="fw-bold fs-6 about-description1"
            style={{ marginLeft: "60%", color: "black" }}
          >
            Upskill Today is a highly curated talent acquisition and talent
            retention strategy. Under this model, we select top candidates​ from
            our extended pool of recent graduates, technical professionals with
            obsolete or soon-to-be deprecated technology skills, and ​mid-career
            professionals seeking to move to Next-Gen technology ​roles.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-50"
          src={WhyUpskill}
          alt="Why Upskill Today?"
          style={{ marginLeft: "45%", width:"100%",objectFit:"scale-down" }}
        />
        <Carousel.Caption>
          <h1
            className="fw-bold fs-1 about-title1"
            style={{ marginRight: "65%" }}
          >
            What is Upskilled Today?
          </h1>
          <p
            className="fw-bold fs-6 about-description1"
            style={{ marginRight: "65%", color: "black" }}
          >
            Whether you’re a fresh graduates or mid-career switchers looking for
            a breakthrough in your career, Upskilling not only speeds up your
            learning in programming language capabilities but also allows you to
            chart, navigate and grow your career, thus making a complete
            transformation in the shortest possible time.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
       
        <Carousel.Caption>
          <h1
            className="fw-bold fs-1 about-title1"
            style={{ marginLeft: "0%" }}
          >
            Testmonials
          </h1>
          <p
            className="fw-bold fs-6 about-description1"
            style={{ marginLeft: "0%", color: "black" }}
          >
            Testimonials
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default AboutUsCarousel;
