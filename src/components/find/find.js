import React from "react";
import { ReactComponent as Person } from "./svg/person-landing.svg";

import Search from "../search/search";

import "./find.css";

class Find extends React.Component {
  render() {
    return (
      <>
        <div id="cell-1" class="cell">
          <h1>Free period products for people in Bristol who need them</h1>
        </div>
        <div id="cell-2" class="cell">
          <Person className="person" />
        </div>
        <div id="cell-3" class="cell">
          <ul>
            <li>Pick up points all over the city</li>
            <li>Donate products to help others</li>
          </ul>
        </div>
        <div id="cell-4" class="cell">
          <h2 id="search-title">Find a Period Friendly Box near you</h2>
        </div>
        <div id="cell-5" class="cell">
          <Search id="search-component" />
        </div>
        <div id="bg-top"></div>
        <div id="bg-bottom"></div>
      </>
    );
  }
}
export default Find;
