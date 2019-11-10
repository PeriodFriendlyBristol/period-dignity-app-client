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
        <div className="middle-section row">
          <div className="person padding-left-1 column">
            <Person />
          </div>
          <div className="call-to-action column">
            <p>
              This information will be reviewed and displayed publicly. Do not enter private/personal information.
            </p>
          </div>
        </div>
        <div className="bottom-section row">
          <form className="submit-host">
            <label>
              Email
              <br/>
              <input type="email" name="email" />
            </label>
            <label>
              <br/>
              Phone number
              <br/>
              <input type="text" name="phone"/>
            </label>
            <label>
              <br/>
              Location name
              <br/>
              <input type="text" name="location_name"/>
            </label>
            <label>
              <br/>
              Address
              <br/>
              <input type="text" name="address"/>
            </label>
            <label>
              <br/>
              Postcode
              <br/>
              <input type="text" name="postcode"/>
            </label>
            <label>
              <br/>
              Where will the box be located?
              <br/>
              <textarea rows="3" cols="33" name="box_location"/>
            </label>
            <label>
              <br/>
              Wheelchair access on site?
              <br/>
              <input type="radio" name="wheelchair" value="yes" />Yes
              <input type="radio" name="wheelchair" value="no" />No
            </label>
            <label>
              <br/>
              Accessible toilet available on site?
              <br/>
              <input type="radio" name="toilet" value="yes" />Yes
              <input type="radio" name="toilet" value="no" />No
            </label>
            <label>
              <br/>
              Opening hours
              <br/>
              <textarea name="box_location"/>
            </label>
            <label>
              <br/>
              Lorem ipsum
              <input type="checkbox" name="terms"/>
            </label>
              <br/>
              <input type="submit" value="I WANT TO BECOME A HOST"/>
          </form>
        </div>
      </body>
    </div>
    )
}
export default Host;