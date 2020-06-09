import React from "react";
import { ReactComponent as Person } from "./svg/person-landing.svg";

import Search from "../search/search";

import "./landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div id="page-content">
        <h1 id="page-title">
          Free period products for people in Bristol who need them
        </h1>
        <div className="person-grid">
          <Person className="person" />
          <ul className="fancy-list">
            <li>Pick up points all over the city</li>
            <li>Donate products to help others</li>
          </ul>
          <h2 id="search-title">Find a Period Friendly Box near you</h2>
        </div>

        <Search id="search-component" />
      </div>
    );
  }
}
export default Landing;
