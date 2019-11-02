import React from 'react';
import './host.css';
import { ReactComponent as Person } from './svg/host.svg';

function Host() {
  return(
     <div className="host">
      <h1 className="title">
        Host a Period Dignity Box
      </h1>
      <body>
        <div className="top-section row">
          <div className="top-text column">
            <p>
              Once approved, you will need:
            </p>
            <ul className="top-list">
              <ol>
                A box, ideally clear
              </ol>
              <ol>
                A printed red label
              </ol>
              <ol>
                To inform everybody who works on site
              </ol>
            </ul>
          </div>
        </div>
        <div className="bottom-section row">
          <div className="person padding-left-1 column">
            <Person />
          </div>
          <div className="call-to-action column">
            <p>
              Interested in becoming a host?
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