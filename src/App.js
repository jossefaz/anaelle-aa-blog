import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*
 * @ Component Imported
 * */

import Home from "./pages/home/HomeFourColumn";
import PortfolioGridThreeColumnPage from "./pages/portfolio/grid/three-column";
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
          path={`${process.env.PUBLIC_URL}/portfolio-details/:link`}
          component={(props) => {
            const link = props.match.params.link;
            if (link) {
              return <PortfolioDetailsPage link={link} />;
            }
            return <ErrorPage />;
          }}
        />

        <Route
          path={`${process.env.PUBLIC_URL + "/about"}`}
          component={AboutPage}
        />
        <Route
          path={`${process.env.PUBLIC_URL + "/"}`}
          component={PortfolioGridThreeColumnPage}
        />

        <Route exact component={ErrorPage} />
      </Switch>
    </Router>
  );
};

export default App;
