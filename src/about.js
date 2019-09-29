import React from 'react';
import logo from './logo.svg';

function redirectToPayPal(){
  window.open("http://www.paypal.com/")
}

function About() {
  return(
    <div className="About">
      <h1>
        About
      </h1>
      <body>
        Everyone should be able to get sanitary prod without sanitary Period Dignity you find free sanitary products
      </body>
      <button onClick={redirectToPayPal}>Donate via Paypal</button>
    </div>
    )
}
export default About;
