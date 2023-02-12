/**
 * It takes an array of objects as a prop and returns a section with a title and a row of columns. Each
 * column contains a box with a title, a description, and a button
 * @returns The ServiceSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { LatestPropertyDetail, providerServices } from "../../../constValues/constValues";

const ServiceSection = () => {
  const value =  [
    {
      img: "/assets/svg/icons.svg#home-heart",
      title: "Insurance",
      details: "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening.",
    },
    {
      img: "/assets/svg/icons.svg#customer-service",
      title: "Fastest Service",
      details: " provides wonderful entertaining spaces with a chef kitchen opening.Elegant retreat in a quiet Coral Gables setting.",
    },
    {
      img: "/assets/svg/icons.svg#shield",
      title: "Largest Marble Company",
      details: "A great name for a ranch surrounded by valley.This home provides wonderful entertaining space with kitchen opening.",
    },
  ]
  return (
    <section className="service-section service-2 pb-0 my-5">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2 dangerouslySetInnerHTML={{ __html: providerServices }} />
              <p className="font-roboto">{LatestPropertyDetail}</p>
            </div>
            <Row className=" property-service column-space">
              {value &&
                value.map((data, i) => (
                  <Col xl="4" md="6" className={` ${i === 2 ? "offset-xl-0 offset-md-3" : ""} wow fadeInUp`} key={i}>
                    <div className="service-box">
                      <div className="hover-line">
                        <svg className="service-icon">
                          <use xlinkHref={data.img}></use>
                        </svg>
                        <div>
                          <svg className="icon-line-color">
                            <use xlinkHref="/assets/svg/icons.svg#line-straight"></use>
                          </svg>
                        </div>
                      </div>
                      <Link href="/pages/other-pages/services">
                        <h3>{data.title}</h3>
                      </Link>
                      <p className="font-roboto">{data.details}</p>
                  
                    </div>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceSection;
