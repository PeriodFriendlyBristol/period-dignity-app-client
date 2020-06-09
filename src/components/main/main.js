import React from "react";

import About from "../about/about";
import Landing from "../landing-page/landing";
import Venues from "../../containers/venues";
import Host from "../host/host";

import { Route } from "react-router-dom";

import "./Main.css";

function Main() {
  return (
    <main>
      <Route exact path="/" component={Landing} />
      <Route path="/venues" component={Venues} />
      <Route path="/about" component={About} />
      <Route path="/host" component={Host} />
    </main>
  );
}

export default Main;
