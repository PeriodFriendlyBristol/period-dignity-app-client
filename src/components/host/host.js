import React from 'react';
import './host.css';
import { ReactComponent as Person } from './svg/host.svg';

function handleSubmit(event){
  event.preventDefault();
  alert('Thank you for your interest, the team will be in touch')
  window.location.replace("/");
  return false;
}

function Host() {
  return(
     <div className="host">
      <h1 className="title">
        Host a Period Dignity Box
      </h1>
      <body>
        <div className="top-section row">
          <div className="top-text-left column">
            <Person className="person"/>
          </div>
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
          <div className="padding-left-1 column">
          </div>
          <div className="call-to-action column">
            <p>
              This information will be reviewed and displayed publicly. Do not enter private/personal information.
            </p>
          </div>
        </div>
        <div className="bottom-section row">
          <form className="form-submit" onSubmit={handleSubmit}>
            <div className="form-submit__item">
              <label for="email">
                Email
                <input type="email" name="email" id="email" className="row"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label for="number">
                Phone number
                <input type="text" name="phone" id="number" className="row"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label for="location">
                Location name
                <input type="text" name="location_name" id="location" className="row"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label for="address">
                Address
                <input type="text" name="address" id="address" className="row"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label for="postcode">
                Postcode
                <input type="text" name="postcode" id="postcode" className="row"/>
              </label>
            </div>
            <div className="form-submit__item">
              <label for="box_location">
                Where will the box be located?
                <textarea name="box_location" id="box_location" className="textarea row"/>
              </label>
            </div>
            <div className="form-submit__item row">
              Wheelchair access on site?
              <div className="row">
              <label className="control radio">
                <input id="radio1" name="radio" type="radio"/>
                <span className="control-indicator"></span>
                Yes
              </label>
              <label className="control radio">
                <input id="radio2" name="radio" type="radio"/>
                <span className="control-indicator"></span>
                No
              </label>
              </div>
            </div>
            <div className="form-submit__item row">
            Accessible toilet available on site?
              <div className="row">
              <label className="control radio">
                <input id="radio1" name="radio" type="radio"/>
                <span className="control-indicator"></span>
                Yes
              </label>
              <label className="control radio">
                <input id="radio2" name="radio" type="radio"/>
                <span className="control-indicator"></span>
                No
              </label>
              </div>
            </div>
            <div className="form-submit__item row">
              Opening hours
              <div className="row">
              <label for="day_of_the_week" className="long_column">
                Day of the week
                <input type="text" name="day_of_the_week" id="day_of_the_week"/>
              </label>
              <label for="from_time" className="short_column">
                From
                <input type="text" name="from_time" id="from_time"/>
              </label>
              <label for="to_time" className="short_column">
                To
                <input type="text" name="to_time" id="to_time"/>
              </label>
              </div>
            </div>
            <div className="form-submit__item">
              <label for="terms" className="tcs">
                <input type="checkbox" name="terms" id="terms"/>
                <span className="checkbox"></span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </label>
            </div>
            <div className="form-submit__item">
              <input type="submit" value="I WANT TO BECOME A HOST" className="button-submit"/>
            </div>
          </form>
        </div>
      </body>
    </div>
    )
}
export default Host;