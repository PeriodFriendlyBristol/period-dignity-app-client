import React from 'react';
import './about.css';
import { ReactComponent as Person } from './about.svg';

function redirectToPayPal(){
  window.open("http://www.paypal.com/")
}

function About() {
  return(
    <div className="About">
      <h1>
        Period Friendly Bristol
      </h1>
      <body>
        <div className="top-section">
          <p>
            Everyone should be able to get the menstrual products they need. Nobody should be held back in life or stigmatised simply for having a period.
          </p>
          <p>
            Many people struggle or are unable to afford menstrual products. This situation and the impact it has is called period poverty.
          </p>
          <p>
            Period Dignity is part of Bristol’s plan to eradicate period poverty become a period friendly city.
          </p>
        </div>
        <div className="bottom-section">
          <Person />
          <p>
            We are just at the beginning of this journey.
          </p>
          <p>
            To share feedback, please get in touch at [email address]
          </p>
        </div>
        <button className="donate" onClick={redirectToPayPal}>DONATE</button>
      </body>
    </div>
    )
}
export default About;
