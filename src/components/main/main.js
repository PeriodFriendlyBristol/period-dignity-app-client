import React from "react";

import About from "../about/about";
import Find from "../find/find";
import Venues from "../venues/venues";
import Host from "../host/host";

import { Route } from "react-router-dom";

import "./Main.css";

function Main() {
  return (
    <main id="app-main">
      <Route exact path="/" component={Find} />
      <Route path="/venues" component={Venues} />
      <Route path="/about" component={About} />
      <Route path="/host" component={Host} />
    </main>
  );
}

export default Main;
