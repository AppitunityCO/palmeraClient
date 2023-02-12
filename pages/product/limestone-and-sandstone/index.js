/**
 * It takes a locale as an argument and returns a props object with the locale and the translations for
 * the common namespace
 * @returns The return value of the function is an object with a props property.
 */
import React, { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NavbarTwo from "../../../layout/headers/NavbarTwo";

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ["common"])) },
});
import FooterTwo from "../../../layout/footers/FooterTwo";
import { ConfigDB } from "../../../config/themeCustomizerConfig";
import Breadcrumb from "../../../layout/Breadcrumb/Breadcrumb";
import BodyContent from "../../../components/pages/otherPages/services/";

const ParallaxImage = () => {
  useEffect(() => {
    setTimeout(() => {
      !ConfigDB.PrimaryColor &&
        document.documentElement.style.setProperty(
          "--theme-default",
          "#00968a"
        );
      !ConfigDB.SecondaryColor &&
        document.documentElement.style.setProperty(
          "--theme-default2",
          "#00968a"
        );
    }, 0.1);
  }, []);
  return (
    <>
      <NavbarTwo />
      <Breadcrumb />
      <BodyContent
        title="Limestone And Sandstone"
      />
      <FooterTwo />
    </>
  );
};

export default ParallaxImage;
