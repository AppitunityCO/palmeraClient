/**
 * It takes a locale and an array of namespaces, and returns an object with the translations for those
 * namespaces
 * @returns The return value of the function is an object with a props property.
 */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale, ["common"])) } });
import Breadcrumb from "../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../components/contact/contactUs1";
import NavbarTwo from "../../layout/headers/NavbarTwo";

import FooterTwo from "../../layout/footers/FooterTwo";

NavbarTwo

const ContactUs1 = () => {
  return (
    <>
      <NavbarTwo />
      <BodyContent />
      <FooterTwo />
    </>
  );
};

export default ContactUs1;
