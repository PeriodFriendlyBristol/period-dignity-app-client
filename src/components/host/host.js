import React, { useState } from "react";
import axios from "axios";
import "./host.css";
import { ReactComponent as Person } from "./svg/host.svg";
import { ReactComponent as Logo } from "../../assets/pfb-logo.svg";

function Host() {
  const [contact, setContact] = useState({});

  const getValues = e => {
    e.persist();
    setContact(contact => ({ ...contact, [e.target.name]: e.target.value }));
  };

  const sendContact = e => {
    e.preventDefault();
    axios
      .post(`https://mailthis.to/${process.env.REACT_APP_FORM_ALIAS}`, contact)
      .then(response => {
        window.location.href = "https://mailthis.to/confirm";
      })
      .catch(err => {
        alert("Something went wrong, please contact us");
      });
  };
  return (
    <div>
      <div className="app-container-circle top-section row">
        <h1 className="host-title row">Host a Period Friendly Box</h1>
        <div className="top-text-left column">
          <Person className="person-host" alt="" />
        </div>
        <div className="top-text-host column">
          <h2>Once approved, you will need:</h2>
          <ul className="top-list custom-bullet-list">
            <li>A box, ideally clear</li>
            <li>A printed red label</li>
            <li>To inform everybody who works on site</li>
          </ul>
          <Logo className="app-logo" id="app-logo" />
        </div>
      </div>
      <div className="bottom-section host row">
        <form
          onSubmit={sendContact}
          encType="multipart/form-data"
          className="form-submit"
        >
          <div className="form-submit__item">
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                className="row"
                onChange={getValues}
              />
            </label>
          </div>
          <div className="form-submit__item">
            <label htmlFor="number">
              Phone number
              <input
                type="text"
                name="phone"
                id="number"
                className="row"
                onChange={getValues}
              />
            </label>
          </div>
          <div className="form-submit__item">
            <label htmlFor="location">
              Location name
              <input
                type="text"
                name="location_name"
                id="location"
                className="row"
                onChange={getValues}
              />
            </label>
          </div>
          <div className="form-submit__item">
            <label htmlFor="address">
              Address
              <input
                type="text"
                name="address"
                id="address"
                className="row"
                onChange={getValues}
              />
            </label>
          </div>
          <div className="form-submit__item">
            <label htmlFor="postcode">
              Postcode
              <input
                type="text"
                name="postcode"
                id="postcode"
                className="long_column"
                onChange={getValues}
              />
            </label>
          </div>
          <div className="form-submit__item">
            <label htmlFor="box_location">
              Where will the box be located?
              <textarea
                name="box_location"
                id="box_location"
                className="textarea row"
                onChange={getValues}
              />
            </label>
          </div>
          <div className="form-submit__item row">
            Wheelchair access on site?
            <div className="radio row">
              <label className="control radio">
                <input
                  id="radio-wheelchair-yes"
                  name="radio-wheelchair"
                  type="radio"
                  value="yes"
                  onChange={getValues}
                />
                <span className="control-indicator"></span>
                Yes
              </label>
              <label className="control radio">
                <input
                  id="radio-wheelchair-no"
                  name="radio-wheelchair"
                  type="radio"
                  value="no"
                  onChange={getValues}
                />
                <span className="control-indicator"></span>
                No
              </label>
            </div>
          </div>
          <div className="form-submit__item row">
            Public accessible toilet available on site?
            <div className="radio row">
              <label className="control radio">
                <input
                  id="radio-toilet-yes"
                  name="radio-toilet"
                  type="radio"
                  value="yes"
                  onChange={getValues}
                />
                <span className="control-indicator"></span>
                Yes
              </label>
              <label className="control radio">
                <input
                  id="radio-toilet-no"
                  name="radio-toilet"
                  type="radio"
                  value="no"
                  onChange={getValues}
                />
                <span className="control-indicator"></span>
                No
              </label>
            </div>
          </div>
          <div className="form-submit__item">
            <label htmlFor="opening_hours">
              Opening hours
              <div className="row">
                <textarea
                  name="opening_hours"
                  id="opening_hours"
                  className="textarea row"
                  onChange={getValues}
                />
              </div>
            </label>
          </div>
          <div className="form-submit__item">
            <label htmlFor="terms" className="control tcs">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onChange={getValues}
              />
              <span className="checkbox"></span>
              <p className="info">
                The information submitted in this form will be publicly available. By ticking the box, you are confirming that the information provided is already public domain, or that you have permission to make it public domain. Please do not include any information you do not wish to be public. 
                If you would like a box to collect products for redistribution, but to not be listed on the website, please email hello@periodfriendlybristol.org for assistance.
              </p>
            </label>
          </div>
          <input
            type="hidden"
            name="_subject"
            value="Period Dignity venue submitted"
          />
          <input
            type="hidden"
            name="_confirmation"
            value="Thank you for your interest, the team will be in touch"
          />
          <input type="hidden" name="_after" value="/" />
          <div className="form-submit__item">
            <input
              type="submit"
              value="I WANT TO BECOME A HOST"
              className="button submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Host;
