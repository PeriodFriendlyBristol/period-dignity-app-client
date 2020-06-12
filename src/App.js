import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";

// import FooterNav from "./components/footer/footer";
import Nav from "./components/nav/nav";

import "./reset.css";
import "./vars.css";
import "./fonts.css";
import "./elements.css";
import "./App.css";

function App() {
  return (
    <div id="app">
      <Header />
      <Main />
      <Nav />
      <div id="app-footer-bar"></div>
    </div>
  );
}

export default App;
