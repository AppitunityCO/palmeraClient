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
      title: "High Valley Fields",
      details: "Merrick Way, Miami, FL United Kingdom",
      moreDetails:
        "No investment on earth is so safe, so sure, so certain to enrich its owner as undeveloped realty. we advise to place you your savings in realty near some growing city. There is no such savings bank anywhere. ",
      bedroom: "3",
      bathroom: "5",
      price: "48596.00",
      sqft: "9532",
      img: "/assets/images/feature/8.jpg",
      id: "27",
    },
    {
      title: "Honeycomb Farms",
      details: "Merrick Way, Miami, FL United Kingdom",
      moreDetails:
        "Real estate is an imperishable asset, ever increasing in value. It is the most solid security that human ingenuity has devised. It is the basis of all security and about the only indestructible security",
      bedroom: "4",
      bathroom: "2",
      price: "10596.00",
      sqft: "22000",
      img: "/assets/images/property/11.jpg",
      id: "28",
    },
    {
      title: "Home in California Avenue ",
      details: "Merrick Way, Miami, FL United Kingdom",
      moreDetails:
        "Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.",
      bedroom: "3",
      bathroom: "1",
      price: "8000.00",
      sqft: "1200",
      img: "/assets/images/property/20.jpg",
      id: "29",
    },
  ]
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
              <p className="font-roboto">Residences can be classified into different type of housing tenure can used for same physical type.</p>
            </div>
            <Gallery>
              <NoSsr>
                <Slider className="feature-3 classic-feature arrow-image zoom-gallery" {...feature3}>
                  {value &&
                    value.map((data, i) => (
                      <div data-title="classic-image1" className="feature-style" key={i}>
                        <div className="feature-wrap">
                          <Row>
                            <Col xl="6" lg="5">
                              <div className="feature-image">
                                <div className="zoom">
                                  <Item original={data.img} width="1000" height="600" key={i}>
                                    {({ ref, open }) => (
                                      <div className="feature-overlay" ref={ref} onClick={open}>
                                        <span>+</span>
                                      </div>
                                    )}
                                  </Item>
                                  <Img src={data.img} className="bg-img" />
                                </div>

                                <span className="label label-solid label-lg label-flat">Featured</span>
                              </div>
                            </Col>
                            <Col xl="6" lg="7">
                              <div className="feature-content">
                                <div className="details">
                                  <h3>
                                    <Link href="/property/image-box">{data.title}</Link>
                                  </h3>
                                  <span>{data.details}</span>
                                  <p className="font-roboto">{data.moreDetails}</p>
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
