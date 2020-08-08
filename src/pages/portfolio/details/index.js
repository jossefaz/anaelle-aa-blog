import React, { Fragment, Suspense } from "react";
import Header from "../../../components/header/HeaderOne";
import SideHeader from "../../../components/SideHeader";
import FooterThree from "../../../components/footer/FooterThree";
import TemplatePortfolioDetails from "../../../templates/portfolio/details";
import ErrorPage from "../../../pages/404Error";
import details from "../../../data/portfolio/details";
import { useParams } from "react-router-dom";

const PortfolioDetailsPage = () => {
  let { link } = useParams();
  const config = details.find((data) => data.link == link);
  return config ? (
    <Suspense fallback={<div>Loading...</div>}>
      <Fragment>
        <Header classes={"position-static"} />
        <SideHeader mobile={true} />
        <TemplatePortfolioDetails config={config} />
        <FooterThree position="fixed" />
      </Fragment>
    </Suspense>
  ) : (
    <ErrorPage />
  );
};

export default PortfolioDetailsPage;
