/**
 * It takes in an array of objects and returns a slider with each object as a slide
 * @returns A component that renders a section with a title, a slider, and a pricing box.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { LatestPropertyDetail, pricingPlan } from "../../../constValues/constValues";
import { pricingSlider } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";

const PricingSection = () => {
  const value= [
    {
      img: "/assets/svg/icons.svg#home-heart",
      title: "Personal",
      details: "Residential design is the design of the interior of private residences.",
      moreDetails: ["Entertaining spaces with kitchen opening.", "Elegant retreat in a quiet setting.", "Apartment An individual multi-unit building."],
      price: "120.00",
    },
    {
      img: "/assets/svg/icons.svg#home-lock",
      title: "Professional",
      details: "Elegant retreat in a quiet Coral Gables setting. This home provides opening.",
      moreDetails: ["house is a single-unit residential building.", "This House provides opening.", "Location of resources will draw attention."],
      price: "310.00",
    },
    {
      img: "/assets/svg/icons.svg#homes",
      title: "Business",
      details: "Apartment An individual multi-unit building. Elegant Coral Gables setting.",
      moreDetails: ["Development team work together in many ways.", "Apartment individual multi-unit building.", "great name for ranch surrounded by valleys."],
      price: "430.00",
    },
    {
      img: "/assets/svg/icons.svg#home-lock",
      title: "Professional",
      details: "Entertaining spaces with kitchen opening. This home provides opening.",
      moreDetails: ["house is a single-unit residential building.", "This House provides opening.", "Location of resources will draw attention."],
      price: "310.00",
    },
  ]
  return (
    <section className="pricing-section slick-between slick-shadow">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2 dangerouslySetInnerHTML={{ __html: pricingPlan }}></h2>
              <p className="font-roboto">{LatestPropertyDetail}</p>
            </div>
            <NoSsr>
              <Slider className="pricing-slider" {...pricingSlider}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="pricing-box">
                        <div className="pricing-details">
                          <div className="pricing-icon">
                            <svg className="pricing-svg">
                              <use xlinkHref={data.img}></use>
                            </svg>
                          </div>
                          <h3>{data.title}</h3>
                          <p className="font-roboto">{data.details}</p>
                        </div>
                        <ul>
                          {data.moreDetails.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                        <div className="price">
                          <span className="label label-light label-flat">Month</span>
                          <h4>${data.price}</h4>
                          <span className="light-text">Per</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;
