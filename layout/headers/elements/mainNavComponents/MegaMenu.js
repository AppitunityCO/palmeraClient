/**
 * It renders a mega menu with nested child menus
 * @returns A React component.
 */
import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";
import { useTranslation } from "next-i18next";
import useMobileSize from "../../../../utils/useMobileSize";

const MegaMenu = ({ navTitle, isOpen, setIsOpen, isOpenNestedChild, setIsOpenNestedChild }) => {
  const { t } = useTranslation("common");
  const mobileSize = useMobileSize();
  console.log(navTitle)
  return (
    <li className="mega-menu">
     <Link href={navTitle.navLink}>

     {!mobileSize && navTitle.icon}

        {t(navTitle.title)}
        <span className="according-menu">{isOpen === navTitle.title ? "-" : "+"}</span>
        </Link>
    </li>
  );
};

export default MegaMenu;
