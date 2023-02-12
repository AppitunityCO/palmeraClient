/**
 * It takes an array of objects and returns a new array of objects with the same keys but with the
 * values transformed by the function you pass in
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { LatestPropertyDetail } from "../../../constValues/constValues";
import { blog2 } from "../../../data/slickSlider";
import NoSsr from "../../../utils/NoSsr";
import BlogWrapBox from "../../elements/propertyBoxs/BlogWrapBox";

const BlogSection = () => {
  const value = [
    {
      img: "/assets/images/property/16.jpg",
      title: "Signs That You Should Sell Your Home Soon",
      place: " Phonics ,Newyork",
      detail: "Luxury real estate is sometimes use as store value, especially wealthy foreigners, without any particular attempt to rent. Some luxury units in London and New York City.",
      date: 18,
      month: "July",
      id: "30",
    },
    {
      img: "/assets/images/blog/2.jpg",
      title: "Twice profit than before you ever got in business.",
      place: " Cambridge,England",
      detail: "Residences can be classified by and how they are connected to neighbouring residences and land. Different types of housing tenure can be used for the same physical type.",
      date: 19,
      month: "june",
      id: "31",
    },
    {
      img: "/assets/images/blog/3.jpg",
      title: "What Are Credit Scores And Why Are They Important?",
      place: " Barcelona,London",
      detail: "The most common and most absolute type of real estate property, the tenant enjoys the greatest discretion over the disposal of the estate property.",
      date: 18,
      month: "May",
      id: "32",
    },
    {
      img: "/assets/images/property/18.jpg",
      title: "Things To Look Out For When Viewing A Property.",
      place: "Berlin,Germany",
      detail: "An interior designer is someone who plans,researches,construction sites, coordinates,management and manages such enhancement projects.",
      date: 26,
      month: "Feb",
      id: "33",
    },
    {
      img: "/assets/images/blog/2.jpg",
      title: "Things To Look Out For When Viewing A Property.",
      place: "Berlin,Germany",
      detail: "An interior designer is someone who plans,researches,construction sites, coordinates,management and manages such enhancement projects.",
      date: 26,
      month: "Feb",
      id: "33",
    },
    {
      img: "/assets/images/blog/1.jpg",
      title: "Signs That You Should Sell Your Home Soon",
      place: " Phonics ,Newyork",
      detail: "Luxury real estate is sometimes use as store value, especially wealthy foreigners, without any particular attempt to rent. Some luxury units in London and New York City.",
      date: 18,
      month: "July",
      id: "34",
    },
    {
      img: "/assets/images/blog/3.jpg",
      title: "What Are Credit Scores And Why Are They Important?",
      place: " Barcelona,London",
      detail: "The most common and most absolute type of real estate property, the tenant enjoys the greatest discretion over the disposal of the estate property.",
      date: 18,
      month: "May",
      id: "35",
    },
  ]
  return (
    <section className="ratio2_1 simple-blog">
      <Container>
        <Row>
          <Col>
            <div className="title-3">
              <svg className="title-svg">
                <use xlinkHref="/assets/svg/icons.svg#title-line"></use>
              </svg>
              <h2>
                Latest <span>Blog</span>
              </h2>
              <p className="font-roboto">{LatestPropertyDetail}</p>
            </div>
            <NoSsr>
              <Slider className="blog-2" {...blog2}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <BlogWrapBox data={data} />
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

export default BlogSection;
