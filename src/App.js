import React from 'react';
import SearchComponent from './SearchComponent'
import logo from './logo.svg';

import './App.css';

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
        <ul>
          <li>
            <a>Period Friendly Bristol</a>
          </li>
          <li>
            <img src={logo} className="App-logo mg-left-2" alt="logo" />
          </li>
        </ul>
      </header>
      <div className="container-middle">
        <div className="text-wrapper">
          <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      <div className="container-middle">
        <div className="search-box-wrapper">
          <SearchComponent />
        </div>
      </div>
    </div>

  );
}

export default App;
