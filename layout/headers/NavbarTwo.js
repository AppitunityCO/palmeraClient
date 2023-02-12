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
                  <span className="font-roboto">
                    <a href="tel:0034 622 220 4101" className="text-white">
                      (0034)-622 220 4101
                    </a>
                    /
                    <a href="tel:0034613371574" className="text-white">
                      (0034)-613 371 574
                    </a>
                  </span>
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
