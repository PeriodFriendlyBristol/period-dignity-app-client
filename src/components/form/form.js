import React, { useState } from "react";
import "./form.css";

import axios from "axios";
function Form() {
  const [contact, setContact] = useState({});

  const getValues = (e) => {
    e.persist();
    setContact((contact) => ({ ...contact, [e.target.name]: e.target.value }));
  };

  const sendContact = (e) => {
    e.preventDefault();
    axios
      .post(`https://mailthis.to/${process.env.REACT_APP_FORM_ALIAS}`, contact)
      .then((response) => {
        window.location.href = "https://mailthis.to/confirm";
      })
      .catch((err) => {
        alert("Something went wrong, please contact us");
      });
  };
  return (
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
            required="true"
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
            required="true"
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
            required="true"
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
            required="true"
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
            required="true"
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
            required="true"
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
              required="true"
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
              required="true"
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
              required="true"
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
            required="true"
            onChange={getValues}
          />
          <span className="checkbox"></span>
          <p className="info">
            The information submitted in this form will be publicly available.
            By ticking the box, you are confirming that the
            information provided is already public domain, or that you have
            permission to make it public domain. Please do not include any
            information you do not wish to be public.  If you would like a box
            to collect products for redistribution, but to not be listed on the
            website, please email hello@periodfriendlybristol.org for
            assistance.
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
  );
}

export default Form;
