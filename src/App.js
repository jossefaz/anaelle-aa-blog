import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*
 * @ Component Imported
 * */

import Home from "./pages/portfolio/grid/three-column";
import LazyRoute from "./components/LazyRoute";
import AboutPage from "./pages/about";
import ServicePage from "./pages/service";
import TeamPage from "./pages/team";
import ContactPage from "./pages/contact";
import ErrorPage from "./pages/404Error";

const Details = lazy(() => import("./pages/portfolio/details"));

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
          component={LazyRoute(Details)}
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
