import React from 'react';
import './host.css';
import { ReactComponent as Person } from './svg/host.svg';

function Host() {
  return(
     <div className="Host">
      <h1 className="title">
        Host a Period Dignity Box
      </h1>
      <body>
        <div className="top-section row">
          <div className="top-text">
            <p>
              Once approved, you will need:
            </p>
            <ul>
              <li>
                A box, ideally clear
              </li>
              <li>
                A printed red label
              </li>
              <li>
                To inform everybody who works on site
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-section row">
          <div className="person padding-left-1 column">
            <Person />
          </div>
          <div className="call-to-action column">
            <p>
              Are you interested in becoming a host?
            </p>
            <p>
              Please get in touch at <a href="mailto:emailaddress">[email address]</a>
            </p>
          </div>
        </div>
      </body>
    </div>
    )
}
export default Host;