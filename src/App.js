import React from 'react';
import SearchComponent from './SearchComponent'
import logo from './logo.svg';

import './App.css';
import MaterialIcon from 'material-icons-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  //TODO componentize header
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.height = "60px";
    } else {
      document.getElementById("header").style.height = "80px";
    }
  }
  return (
    <div className="App">
      <header className="App-header sticky" id="header">
      </header>
      <footer className="footer">
        <div className="div-ul">
          <div>
            <li className="icon-left footer-text">
              <MaterialIcon icon="my_location" color="#FBAF1E" />
            </li>
            <li className="left-li footer-text selected-text padding-top-half">
              Find a Box
            </li>
          </div>
          <div>
            <li className="icon-center">
              <MaterialIcon icon="favorite" color="white" />
            </li>
            <li className="center-li footer-text">
            Host a Box
            </li>
          </div>
          <div>
            <li className="icon-right">
              <MaterialIcon icon="person" color="white" />
            </li>
            <li className="right-li footer-text">
            About
            </li>
          </div>
        </div>
      </footer>
        <div className="map-container">Map box to be popped into here</div>
    </div>

  );
}

export default App;
