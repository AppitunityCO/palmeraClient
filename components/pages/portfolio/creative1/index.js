import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import Img from "../../../../utils/BackgroundImageRatio";

export const creativeData = [
  {
    img: "/assets/images/parallax/4.jpg",
    title: "Crema Marfil Coto®",
    pageLink: "/product/crema-marfil-coto",
    details:
      "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening Residences can be classified by and connected to neighbouring residences and land.",
  },
  {
    img: "/assets/images/parallax/5.jpg",
    title: "Marble",
    pageLink: "/product/marble",

    details:
      "Entertaining spaces with a chef kitchen opening Residences can be classified by and connected to neighbouring residences and land. Elegant retreat in a quiet Coral Gables setting. This home provides wonderful space.",
  },
  {
    img: "/assets/images/parallax/1.jpg",
    title: "Naturamia®",
    pageLink: "/product/naturamia",

    details:
      "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening. Residences can be classified by and connected to neighbouring residences and land.",
  },
  {
    img: "/assets/images/parallax/1.jpg",
    title: "Granite",
    pageLink: "/product/granite",

    details:
      "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening. Residences can be classified by and connected to neighbouring residences and land.",
  },
  {
    img: "/assets/images/parallax/1.jpg",
    title: "Techlam®",
    pageLink: "/product/techlam",

    details:
      "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening. Residences can be classified by and connected to neighbouring residences and land.",
  },
  {
    img: "/assets/images/parallax/1.jpg",
    title: "Naturamia® Quartzites",
    pageLink: "/product/naturamia-quartzites",

    details:
      "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening. Residences can be classified by and connected to neighbouring residences and land.",
  },
  {
    img: "/assets/images/parallax/1.jpg",
    title: "Tiles collection",
    pageLink: "/product/tile-collection",

    details:
      "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening. Residences can be classified by and connected to neighbouring residences and land.",
  },
  {
    img: "/assets/images/parallax/1.jpg",
    title: "Limestone and Sandstone",
    pageLink: "/product/limestone-and-sandstone",

    details:
      "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening. Residences can be classified by and connected to neighbouring residences and land.",
  },
  {
    img: "/assets/images/parallax/1.jpg",
    title: "Travertine",
    pageLink: "/product/tavertine",

    details:
      "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening. Residences can be classified by and connected to neighbouring residences and land.",
  },
  {
    img: "/assets/images/parallax/1.jpg",
    title: "Pavex",
    pageLink: "/product/pavex",

    details:
      "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening. Residences can be classified by and connected to neighbouring residences and land.",
  },
  {
    img: "/assets/images/parallax/1.jpg",
    title: "Techlam® Countertop",
    pageLink: "/product/techlam-countertop",

    details:
      "Elegant retreat in a quiet Coral Gables setting. This home provides wonderful entertaining spaces with a chef kitchen opening. Residences can be classified by and connected to neighbouring residences and land.",
  },
];

const BodyContent = () => {
  return (
    <section className="portfolio-creative odd-even ratio_55">
      <Container>
        {creativeData
          ? creativeData.map((data, i) => (
              <Row className=" m-0" key={i}>
                <Col lg="6" className={` p-0 ${i % 2 !== 0 && "order-lg-1"}`}>
                  <div className="wow zoomIn ">
                    <Img src={data.img} className="img-fluid bg-img" alt />
                  </div>
                </Col>
                <Col lg="6" className=" p-0">
                  <div className="content-sec wow zoomIn">
                    <div>
                      <h3>
                        <Link href={String(data.pageLink)}>{data.title}</Link>
                      </h3>
                      <p className="font-roboto">{data.details}</p>
                      <Link
                        href={String(data.pageLink)}
                        className="btn btn-gradient btn-pill"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>
            ))
          : ""}
      </Container>
    </section>
  );
};

export default BodyContent;
