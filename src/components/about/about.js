import React from "react";
import "./about.css";
import { ReactComponent as Person } from "./svg/person-about.svg";

function redirectToPayPal() {
  window.open("http://www.paypal.com/");
}

function About() {
  return (
    <>
      <div id="cell-1" class="cell">
        <h1>Period Friendly Bristol</h1>

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
        <p>
          The Period Friendly Bristol web app is a{" "}
          <a href="https://www.bristolonecity.com/one-city-plan/">One City</a>{" "}
          project stewarded by Period Friendly Places Charity and powered by{" "}
          <a href="https://www.bristolisopen.com/">Bristol is Open</a>.
        </p>
        <p>
          We are just at the beginning of this journey. To share feedback,
          please get in touch at{" "}
          <a href="mailto:hello@periodfriendlybristol.org">
            hello@periodfriendlybristol.org
          </a>
        </p>
      </div>
      <div id="cell-2" class="cell">
        <Person className="person" />
      </div>
      <div id="cell-3" class="cell"></div>

      <div id="cell-4" class="cell"></div>
      <div id="cell-5" class="cell">
        <p>
          The period dignity web app has been made by local web service
          designers and developers. Supported by Marius Jennings @ Bristol City
          Council's Innovation team,{" "}
          <a href="https://www.linkedin.com/in/ajara-i-pfannenschmidt/">
            Ajara Pfannenschmidt
          </a>{" "}
          and&nbsp;
          <a
            href="https://www.linkedin.com/in/john-kellas-0a63635b/"
            target="_blank"
          >
            John Kellas
          </a>
          &nbsp;co-facilitated the wonderful dev team that included: &nbsp;
          <a
            href="https://www.linkedin.com/in/cgillions/?originalSubdomain=uk"
            target="_blank"
          >
            Charlie Gillions
          </a>
          ,&nbsp;
          <a
            href="https://www.linkedin.com/in/adam-waterman-1336269b/?originalSubdomain=uk"
            target="_blank"
          >
            Adam Waterman
          </a>
          ,&nbsp;
          <a
            href="https://www.linkedin.com/in/elisa-covato-phd-1845b7147/?originalSubdomain=uk"
            target="_blank"
          >
            Elisa Covato
          </a>
          ,&nbsp;
          <a
            href="https://www.linkedin.com/in/fran-zuch-seccl/?originalSubdomain=uk"
            target="_blank"
          >
            Fran Zuch
          </a>
          ,&nbsp;
          <a
            href="https://www.linkedin.com/in/genesis-self-fordham-22655a88/"
            target="_blank"
          >
            Genesis Self-Fordham
          </a>
          ,&nbsp;
          <a href="https://www.linkedin.com/in/jayceecheong/" target="_blank">
            Jaycee Cheong
          </a>
          ,&nbsp;
          <a
            href="https://www.linkedin.com/in/jonah-freeland-6386a329/"
            target="_blank"
          >
            Jonah Freeland
          </a>
          . Many thanks to these dedicated folks and the others that helped
          through the Hackathon.
        </p>
        {/*
          <button className="button donate" onClick={redirectToPayPal}>
            DONATE
          </button>
          */}
      </div>
      <div id="bg-top"></div>
      <div id="bg-bottom"></div>
    </>
  );
}
export default About;
