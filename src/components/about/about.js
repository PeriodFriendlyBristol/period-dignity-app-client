import React from "react";
import "./about.css";
import { ReactComponent as Person } from "./svg/about.svg";
import { ReactComponent as Logo } from "../../assets/period_logo.svg";

function redirectToPayPal() {
  window.open("http://www.paypal.com/");
}

function About() {
  return (
    <div>
      <h1 className="title">Period friendly Bristol</h1>
      <div className="container-circle top-section row">
        <div className="invisible column" />
        <div className="top-text column">
          <p>
            Bristol has pledged to take a leading role in making period products
            available to all who need them, while also combating outdated
            attitudes to periods.
          </p>
          <p>
            The Period Friendly Places vision is for Bristol to be a city of
            period dignity, in which nobody is held back in life or stigmatised
            against simply for having a period – this is part of our journey to
            being a period friendly city.
          </p>
          <Logo className="logo" />
        </div>
      </div>
      <div className="bottom-section row">
        <div className="call-to-action column">
          <Person className="person_donate" />
        </div>
        <div
          className="call-to-action padding-right-1 column"
          id="donate-section"
        >
          <button className="button donate" onClick={redirectToPayPal}>
            DONATE
          </button>
          <p>We are just at the beginning of this journey.</p>
          <p>To share feedback, please get in touch at [email address]</p>
        </div>
      </div>
    </div>
  );
}
export default About;
