import React from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Landing from './components/landing-page/landing'

import './App.css';

function App() {
  const scrollFunction = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("header").style.height = "60px";
    } else {
      document.getElementById("header").style.height = "80px";
    }
  }

  window.onscroll = () => { scrollFunction() };

  return (
    <div className="App">
      <Header></Header>
      <Landing></Landing>
      <Footer></Footer>
    </div>
  );
}

export default App;
