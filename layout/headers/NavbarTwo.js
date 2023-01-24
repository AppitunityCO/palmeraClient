/**
 * It returns a TopBar component and a header component with a MainNav component inside
 * @returns The NavbarTwo component is being returned.
 */
import React from "react";
import { Container, Row } from "reactstrap";
import useStickyBar from "../../utils/useStickyBar";
import MainNav from "./elements/MainNav";
import TopBar from "./elements/TopBar";

const NavbarTwo = () => {
  const fix = useStickyBar();
  return (
    <>
      <TopBar />
      <header className={`header-3 fixed-header ${fix ? "fixed" : ""}`}>
        <Container>
          <Row>
            <div className="col-12">
              <div className="header-layout-3">
                <MainNav icon={true} />
                <div className="contact-number">
                  <i className="fas fa-phone-alt"></i>
                  <span className="font-roboto">(880)-123 789 / (800)- 561 456</span>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default NavbarTwo;
