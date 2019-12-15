import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <a href="/">
          <div className="header">Period Friendly Bristol</div>
        </a>
      </header>
    );
  }
}

export default Header;
