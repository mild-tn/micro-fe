import HomePage from "features/home_page/index";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomeRoute = () => {
  //---------------------
  //  RENDER
  //---------------------
  return <HomePage />;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "home"])),
  },
});

export default HomeRoute;
