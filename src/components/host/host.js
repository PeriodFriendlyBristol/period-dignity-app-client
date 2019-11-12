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
          <div className="top-text-left column"/>
          <div className="top-text column">
            <p>
              Once approved, you will need:
            </p>
            <ul className="top-list custom-bullet-list">
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
          <form className="form-submit">
            <div className="form-submit__item">
              <label for="email">
                Email
                <input type="email" name="email" id="email"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label for="number">
                Phone number
                <input type="text" name="phone" id="number"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label for="location">
                Location name
                <input type="text" name="location_name" id="location"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label for="address">
                Address
                <input type="text" name="address" id="address"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label for="postcode">
                Postcode
                <input type="text" name="postcode" id="postcode"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label for="box_location">
                Where will the box be located?
                <textarea rows="3" cols="33" name="box_location" id="box_location"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label>
                
                Wheelchair access on site?
                
                <input type="radio" name="wheelchair" value="yes" />Yes
                <input type="radio" name="wheelchair" value="no" />No
              </label>
            </div>
            <div className="form-submit__item">
              <label>
                
                Accessible toilet available on site?
                <input type="radio" name="toilet" value="yes" />Yes
                <input type="radio" name="toilet" value="no" />No
              </label>
            </div>
            <div className="form-submit__item">
              <label>
                
                Opening hours
                
                <textarea name="box_location"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label className="tcs">
                <input type="checkbox" name="terms"/>
                <span className="checkbox"></span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </label>
            </div>
            <div className="form-submit__item">
              
              <input className="button-submit" type="submit" value="I WANT TO BECOME A HOST"/>
            </div>
          </form>
        </div>
      </body>
    </div>
    )
}
export default Host;