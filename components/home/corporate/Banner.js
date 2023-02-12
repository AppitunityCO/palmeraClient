/**
 * It returns a section with a container, row, and column. The column contains a div with a span, h2,
 * p, and a link
 * @returns A function that returns a component
 */
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Realestate, SubmitProperty } from "../../../constValues/constValues";

const BannerSection = ({ banner }) => {
  return (
    <section className={`banner-section layout${banner}-bg parallax-image`}>
      <Container>
        <Row>
          <Col>
            <div className="banner-3">
              <span className={`label label-light label-flat`}>#Palmera</span>
              <h2>
              Welcome To Palmera marble
              </h2>
              <p>
              ProRange Painters is a full-service interior and exterior painting company that believes in treating our customers like family.

              </p>

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerSection;
