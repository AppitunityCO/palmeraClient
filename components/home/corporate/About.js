/**
 * It takes in an array of objects and returns a slider component with each object as a slide
 * @returns The AboutSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import { Eye, Mail } from "react-feather";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { LatestPropertyDetail } from "../../../constValues/constValues";
import { about2 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import SocialAccounts from "../../elements/SocialAccounts";

const AboutSection = () => {
  const value = [
    {
      name: "Material Rock",
      img: "/assets/images/avatar/metaverse.png",
      work: "UAE",
      email: "John@inspirythemes.com",
      details:
        "How they are connected to neighbouring residences and land. Residences can be classified.",
    },
    {
      name: "Meta Company",
      img: "/assets/images/avatar/materialRock.jpg",
      work: "Saudi Arabia",
      email: "John@inspirythemes.com",
      details:
        "How they are connected to neighbouring residences and land. Residences can be classified.",
    },
    {
      name: "Musica Company",
      img: "/assets/images/avatar/musica.png",
      work: "Saudi Arabia",
      email: "John@inspirythemes.com",
      details:
        "How they are connected to neighbouring residences and land. Residences can be classified.",
    },
  ];
  return (
    <section className="about-section slick-between pb-0 ratio_square mb-4">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2>
                Our <span>Customers & partners</span>
              </h2>
            </div>
            <NoSsr>
              <Slider className="about-wrap about-2" {...about2}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="about-content">
                        <div className="about-image">
                          <div>
                            <img
                              src={data.img}
                              className=""
                              alt=""
                              height={250}
                              width={350}
                            />
                          </div>
                          <div className="about-overlay"></div>
                          <div className="overlay-content">
                            <SocialAccounts />
                            <span>Connect</span>
                          </div>
                        </div>
                        <div className="our-details">
                          <Link href="/agent/agent-profile">
                            <h6 className="d-flex">
                              {data.name}
                              <span className="label-heart ms-2">
                                <i className="fas fa-heart"></i>
                              </span>
                            </h6>
                          </Link>
                          <h3>{data.work}</h3>
                          <span className="font-roboto">
                            <Mail className="me-1" />
                            {data.email}
                          </span>
                          <p className="font-roboto">{data.details}</p>
                        {/*   <Link
                            href="/agent/agent-profile"
                            className="btn btn-solid btn-flat mt-2"
                          >
                            <Eye />
                            View Portfolio
                          </Link> */}
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

export default AboutSection;
