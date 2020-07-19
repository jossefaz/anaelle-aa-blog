import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*
 * @ Component Imported
 * */

import Home from "./pages/home/HomeFourColumn";
import PortfolioGridTwoColumnPage from "./pages/portfolio/grid/two-column";
import PortfolioGridThreeColumnPage from "./pages/portfolio/grid/three-column";
import PortfolioGridFourColumnPage from "./pages/portfolio/grid/four-column";
import PortfolioGridThreeColumnFullWidthPage from "./pages/portfolio/grid/three-column-fullwidth";
import PortfolioGridFourColumnFullWidthPage from "./pages/portfolio/grid/four-column-fullwidth";
import PortfolioGridFiveColumnFullWidthPage from "./pages/portfolio/grid/five-column-fullwidth";
import PortfolioMasonryTwoColumnPage from "./pages/portfolio/masonry/two-column";
import PortfolioMasonryThreeColumnPage from "./pages/portfolio/masonry/three-column";
import PortfolioMasonryFourColumnPage from "./pages/portfolio/masonry/four-column";
import PortfolioMasonryThreeColumnFullWidthPage from "./pages/portfolio/masonry/three-column-fullwidth";
import PortfolioMasonryFourColumnFullWidthPage from "./pages/portfolio/masonry/four-column-fullwidth";
import PortfolioMasonryFiveColumnFullWidthPage from "./pages/portfolio/masonry/five-column-fullwidth";
import PortfolioDetailsPage from "./pages/portfolio/details";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import TeamPage from "./pages/team";
import ContactPage from "./pages/contact";
import ErrorPage from "./pages/404Error";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path={`${process.env.PUBLIC_URL + "/contact"}`}
          component={ContactPage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/shop-collection"}`}
          component={TeamPage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/service"}`}
          component={ServicePage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/portfolio-details"}`}
          component={PortfolioDetailsPage}
        />
        <Route
          path={`${
            process.env.PUBLIC_URL + "/portfolio-masonry-five-column-fullwidth"
          }`}
          component={PortfolioMasonryFiveColumnFullWidthPage}
        />
        <Route
          path={`${
            process.env.PUBLIC_URL + "/portfolio-masonry-four-column-fullwidth"
          }`}
          component={PortfolioMasonryFourColumnFullWidthPage}
        />
        <Route
          path={`${
            process.env.PUBLIC_URL + "/portfolio-masonry-three-column-fullwidth"
          }`}
          component={PortfolioMasonryThreeColumnFullWidthPage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/portfolio-masonry-four-column"}`}
          component={PortfolioMasonryFourColumnPage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/portfolio-masonry-three-column"}`}
          component={PortfolioMasonryThreeColumnPage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/portfolio-masonry-two-column"}`}
          component={PortfolioMasonryTwoColumnPage}
        />
        <Route
          path={`${
            process.env.PUBLIC_URL + "/portfolio-grid-five-column-fullwidth"
          }`}
          component={PortfolioGridFiveColumnFullWidthPage}
        />
        <Route
          path={`${
            process.env.PUBLIC_URL + "/portfolio-grid-four-column-fullwidth"
          }`}
          component={PortfolioGridFourColumnFullWidthPage}
        />
        <Route
          path={`${
            process.env.PUBLIC_URL + "/portfolio-grid-three-column-fullwidth"
          }`}
          component={PortfolioGridThreeColumnFullWidthPage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/portfolio-grid-four-column"}`}
          component={PortfolioGridFourColumnPage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/portfolio-grid-three-column"}`}
          component={PortfolioGridThreeColumnPage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/portfolio-grid-two-column"}`}
          component={PortfolioGridTwoColumnPage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/about"}`}
          component={AboutPage}
        />
        <Route path={`${process.env.PUBLIC_URL + "/"}`} component={Home} />

        <Route exact component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
