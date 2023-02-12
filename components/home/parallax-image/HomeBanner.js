import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import { MapPin } from "react-feather";
import Slider from "react-slick";

import { useDispatch } from "react-redux";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import Img from "../../../utils/BackgroundImageRatio";

const HomeBannerSection = () => {
  const settings = {
    dots: false,
    arrow: true,
    arrow: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setY(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="arrow-style-2 ">
      <Slider {...settings} arrows={true}>
        <section className="p-0 parallax-section">
          <div
            className="full_banner"
            style={{ backgroundPositionY: `${y / 2}px` }}
          >
            <Img
              src="/assets/images/layout/1.jpg"
              className="img-fluid bg-img"
              alt
            />
            <div className="center-content">
              <div>
                <h2>Luxury products</h2>
                <h6 className="text-center">find our best products</h6>
              </div>
            </div>
          </div>
        </section>
        <section className="p-0 parallax-section">
          <div
            className="full_banner"
            style={{ backgroundPositionY: `${y / 2}px` }}
          >
            <Img
              src="/assets/images/layout/quartz.jpg"
              className="img-fluid bg-img"
              alt
            />
            <div className="center-content">
              <div>
                <h2>With Even Better Service</h2>
                <h6 className="text-center">find our provided services</h6>
              </div>
            </div>
          </div>
        </section>
        <section className="p-0 parallax-section">
          <div
            className="full_banner"
            style={{ backgroundPositionY: `${y / 2}px` }}
          >
            <Img
              src="/assets/images/layout/marble.jpg"
              className="img-fluid bg-img"
              alt
            />
            <div className="center-content">
              <div>
                <h2>Check Our Applications</h2>
                <h6 className="text-center">check out our best applications</h6>
              </div>
            </div>
          </div>
        </section>
      </Slider>
    </div>
  );
};

export default HomeBannerSection;
