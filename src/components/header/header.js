import React from "react";
import "./header.css";
import Nav from "../nav/nav";

class Header extends React.Component {
  render() {
    return (
      <header id="app-header">
        <a id="app-title-link" href="/">
          <div id="app-title">Period Friendly Bristol</div>
        </a>
        <Nav />
      </header>
    );
  }
}

export default Header;
