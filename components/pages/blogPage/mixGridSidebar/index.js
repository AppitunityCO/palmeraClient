/**
 * It takes a number of items per page and a list of items, and returns a list of pages, each of which
 * contains a list of items
 * @returns The return value of the function is the value of the last expression executed in the
 * function.
 */
import Link from "next/link";
import React, { useEffect, useReducer, useState } from "react";
import { MapPin } from "react-feather";
import { Col, Container, Row } from "reactstrap";
import Pagination from "../../../../layout/Pagination";
import Category from "../../../../layout/sidebarLayout/Category";
import PopularTags from "../../../../layout/sidebarLayout/PopularTags";
import RecentlyAdded from "../../../../layout/sidebarLayout/RecentlyAdded";
import SearchBar from "../../../../layout/sidebarLayout/SearchBar";
import Sidebar from "../../../../layout/sidebarLayout/Sidebar";
import Img from "../../../../utils/BackgroundImageRatio";
import { getData } from "../../../../utils/getData";
import BlogWrapBox from "../../../elements/propertyBoxs/BlogWrapBox";
import { gridReducer, initialGrid } from "../../../listing/gridView/grid/gridReducer";

const BodyContent = ({ side }) => {
  const [value, setValue] = useState();
  const [grid, gridDispatch] = useReducer(gridReducer, initialGrid);
  const LatestBlogInCorporate = [
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
    <section className="ratio_landscape blog-list-section">
      <Container>
        <Row>
          {side && (
            <Sidebar side={side}>
              <SearchBar />
              <Category />
              <RecentlyAdded />
              <PopularTags />
            </Sidebar>
          )}
          <Col xl="12" lg="12">
            <Col>
              <Row className="blog-grid ">
                {LatestBlogInCorporate &&
                  LatestBlogInCorporate.slice(grid.toPage * 4 - 4, grid.toPage * 6).map((data, i) => (
                    <Col md="6" lg={side === "right" || side === "left" ? "6" : "4"} key={i}>
                      <BlogWrapBox data={data} />
                    </Col>
                  ))}
              </Row>
              <Pagination toPage={grid.toPage} gridDispatch={gridDispatch} totalPages={grid.totalPages} />
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BodyContent;
