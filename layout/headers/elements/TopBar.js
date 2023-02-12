import React, { useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  Row,
} from "reactstrap";
import { Logo2 } from "../../../components/elements/Logo";
import SearchSuggestionBox from "../../../components/elements/SearchSuggestionBox";
import useOutsideDropdown from "../../../utils/useOutsideDropdown";
import RightNav from "./RightNav";
import { Logo5 } from "../../../components/elements/Logo";

// import Cart from './rightNavComponents/Cart';

const TopBar = ({ logo }) => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDownValue, setDropDownValue] = useState("Apartment");
  const [searchInput, setSearchInput] = useState("");
  const [searchDropDown, setSearchDropDown] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideDropdown(false);

  return (
    <div className="top-bar">
      <Container>
        <Row>
          <Col>
            <div className="top-content top-nav">
              {<Logo5 /> || <Logo2 />}

              <RightNav loginModal={true} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
