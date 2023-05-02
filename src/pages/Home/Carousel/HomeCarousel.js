import React, { useState } from "react";
import homemain from "../../../images/upskill-main.jpeg";
import homemain_1980 from "../../../images/upskill-main-1980.jpeg";
import homemain_960 from "../../../images/upskill-main-960.jpeg"
import homemain_680 from "../../../images/upskill-main-680.jpeg";
import homemain_320 from "../../../images/upskill-main-320.jpeg";

import homebc from "../../../images/home-b2c.png";
import homebb from "../../../images/home-tgt.jpeg";
import "./homecarousel.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel
      fade
      activeIndex={index}
      onSelect={handleSelect}
      className="carousel-home"
    >
      <Carousel.Item className="homecarousel-item">
        <img
          className="d-block w-100 slide-img img-fluid"
          srcSet={`${homemain_320} 320w, ${homemain_680} 680w, ${homemain_960}   960w, ${homemain_1980} 1980w`}
          src={homemain_1980}
          alt="First slide"
        />
        <Carousel.Caption className="home-caption">
          <h1 className="carousel-title">UPSKILL TODAY</h1>
          <h3 className="carousel-text pb-4 d-none d-md-block">
            Begin Your IT Journey With Us
          </h3>
          <Button className="carousel-call">
            <Link
              className="text-decoration-none text-white"
              to="/CareerPathway"
            >
              Find Out More
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="homecarousel-item">
        <img
          className="d-block w-100 slide-img img-fluid"
          src={homebc}
          alt="Second slide"
        />
        <Carousel.Caption className="home-caption">
          <h1 className="carousel-title">UPSKILL TODAY</h1>
          <h3 className="carousel-text pb-4  d-none d-md-block">
            Begin Your IT Journey With Us
          </h3>
          <Button className="carousel-call">
            <Link
              className="text-decoration-none text-white"
              to="/CareerPathway"
            >
              Find Out More
            </Link>
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="homecarousel-item">
        <img
          className="d-block w-100 slide-img img-fluid"
          src={homebb}
          alt="Third slide"
        />
        <Carousel.Caption className="home-caption">
          <h1 className="carousel-title">UPSKILL TODAY</h1>
          <h3 className=" carousel-text pb-4 d-none d-md-block">
            Begin Your IT Journey With Us
          </h3>

          <Link
            className="text-decoration-none text-white"
            to="/CareerPathway "
          >
            <Button className=" carousel-call">Find Out More</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default HomeCarousel;
