import React from "react";
import "./header.css";
import Nav from "../nav/nav";
import { ReactComponent as Logo } from "./svg/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header id="app-header">
        <a id="app-title-link" href="/">
          <Logo />
        </a>
      </header>
    );
  }
}

export default Header;
