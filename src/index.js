import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import About from "./components/about/about";
import Landing from "./components/landing-page/landing";
import Venues from "./containers/venues";
import Host from './components/host/host';


ReactDOM.render(
  <BrowserRouter>
    <App />
    <Route exact path="/" component={Landing} />
    <Route path="/venues" component={Venues} />
    <Route path="/about" component={About} />
    <Route path="/host" component={Host} />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
