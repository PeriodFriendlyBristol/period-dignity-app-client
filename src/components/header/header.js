import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <a href="/">
          <h1>Period Friendly Bristol</h1>
        </a>
      </header>
    );
  }
}

export default Header;
