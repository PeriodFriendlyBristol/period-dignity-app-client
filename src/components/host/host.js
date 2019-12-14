import React, { useState } from "react";
import axios from "axios";
import "./host.css";
import { ReactComponent as Person } from "./svg/host.svg";
import { ReactComponent as Logo } from "../../assets/period_logo.svg";

function Host() {
  const [contact, setContact] = useState({});

  const getValues = e => {
    e.persist();
    e.preventDefault();
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
      <div className="container-circle top-section row">
        <h1 className="host-title row">Host a Period Dignity Box</h1>
        <div className="top-text-left column">
          <Person className="person" />
        </div>
        <div className="top-text column">
          <p>Once approved, you will need:</p>
          <ul className="top-list custom-bullet-list">
            <li>A box, ideally clear</li>
            <li>A printed red label</li>
            <li>To inform everybody who works on site</li>
          </ul>
          <Logo className="logo" />
        </div>
      </div>
      <div className="middle-section row">
        <div className="padding-left-1 column"></div>
        <div className="call-to-action column">
          <p>
            This information will be reviewed and displayed publicly. Do not
            enter private/personal information.
          </p>
        </div>
      </div>
      <div className="bottom-section row">
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
                className="row"
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
            <div className="row">
              <label className="control radio">
                <input
                  id="radio-wheelchair-yes"
                  name="radio"
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
                  name="radio"
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
            <div className="row">
              <label className="control radio">
                <input
                  id="radio-toilet-yes"
                  name="radio"
                  type="radio"
                  value="yes"
                  onChange={getValues}
                />
                <span className="control-indicator"></span>
                Yes
              </label>
              <label className="control radio">
                <input
                  id="radio-toilet-yes"
                  name="radio"
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
            <label htmlFor="terms" className="tcs">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                onChange={getValues}
              />
              <span className="checkbox"></span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
