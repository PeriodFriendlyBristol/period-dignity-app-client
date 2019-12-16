import React from "react";
import Search from "../search/search";
import { ReactComponent as Logo } from "./svg/period_logo.svg";
import "./landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <div className="container-circle">
          <h1 className="landing-text-1">
            Free period products for people in Bristol who need them
          </h1>
          <div className="text-wrapper">
            <ul className="top-list landing-bullet-list">
              <li>Pick up points all over the city</li>
              <li className="landing-list">Donate products to help others</li>
              <li className="no-bullet">
                <Logo className="logo" />
              </li>
            </ul>
          </div>
        </div>
        <Search />
      </div>
    );
  }
}

export default Landing;
