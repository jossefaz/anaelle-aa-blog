import React, { Fragment } from "react";
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import FooterThree from "../../../components/footer/FooterThree";
import TemplatePortfolioDetails from "../../../templates/portfolio/details";
import ErrorPage from "../../../pages/404Error";
import details from "../../../data/portfolio/details";

const PortfolioDetailsPage = ({ link }) => {
  const config = details.find((data) => data.link == link);
  return config ? (
    <Fragment>
      <Header classes={"position-static"} />
      <SideHeader mobile={true} />
      <TemplatePortfolioDetails config={config} />
      <FooterThree position="fixed" />
    </Fragment>
  ) : (
    <ErrorPage />
  );
};

export default PortfolioDetailsPage;
