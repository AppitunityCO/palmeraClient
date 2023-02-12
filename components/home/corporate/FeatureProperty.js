/**
 * It takes in an array of objects and returns a slider with each object's data
 * @returns An array of objects.
 */
/**
 * It takes in an array of objects and returns a slider with each object's data
 * @returns An array of objects.
 */
import Link from "next/link";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { feature3 } from "../../../data/slickSlider";
import Img from "../../../utils/BackgroundImageRatio";
import NoSsr from "../../../utils/NoSsr";

const FeaturePropertySection = () => {
  const value = [
    {
      title: "Calacatta Quartz Countertop",
      details: "Merrick Way, Miami, FL United Kingdom",
      moreDetails:
        "This luxurious white quartz with grey veins is a perfect replication of Calacatta marble. It's durable, easy to maintain and adds a touch of elegance to any kitchen. ",

      price: "48596.00",
      img: "/assets/images/feature/quartz.jpg",
      id: "27",
    },
    {
      title: "Statuario Quartz Countertop",
      details: "Merrick Way, Miami, FL United Kingdom",
      moreDetails:
        "Statuario quartz has a white base with soft grey veining and is often used to recreate the look of a classic white Italian marble.",

      price: "10596.00",
      img: "/assets/images/feature/quartzone.jpg",
      id: "28",
    },
    {
      title: "Snowy Carrara Quartz Countertop",
      details: "Merrick Way, Miami, FL United Kingdom",
      moreDetails:
        " This quartz countertop is a perfect replication of Carrara marble with its white base and soft grey veining. It's a popular choice for both kitchens and bathrooms.",

      price: "8000.00",
      img: "/assets/images/feature/quartzTwo.jpg",
      id: "29",
    },
  ];
  return (
    <section className="feature-section ratio_landscape pt-0 mt-5">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2>
                Featured <span>Products</span>
              </h2>
              <p className="font-roboto">
                Residences can be classified into different type of housing
                tenure can used for same physical type.
              </p>
            </div>
            <Gallery>
              <NoSsr>
                <Slider
                  className="feature-3 classic-feature arrow-image zoom-gallery"
                  {...feature3}
                >
                  {value &&
                    value.map((data, i) => (
                      <div
                        data-title="classic-image1"
                        className="feature-style"
                        key={i}
                      >
                        <div className="feature-wrap">
                          <Row>
                            <Col xl="6" lg="5">
                              <div className="feature-image">
                                <div className="zoom">
                                  <Item
                                    original={data.img}
                                    width="1000"
                                    height="600"
                                    key={i}
                                  >
                                    {({ ref, open }) => (
                                      <div
                                        className="feature-overlay"
                                        ref={ref}
                                        onClick={open}
                                      >
                                        <span>+</span>
                                      </div>
                                    )}
                                  </Item>
                                  <Img src={data.img} className="bg-img" />
                                </div>

                                <span className="label label-solid label-lg label-flat">
                                  Featured
                                </span>
                              </div>
                            </Col>
                            <Col xl="6" lg="7">
                              <div className="feature-content">
                                <div className="details">
                                  <h3>
                                    <Link href="/property/image-box">
                                      {data.title}
                                    </Link>
                                  </h3>
                                  <span>{data.details}</span>
                                  <p className="font-roboto">
                                    {data.moreDetails}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    ))}
                </Slider>
              </NoSsr>
            </Gallery>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturePropertySection;
