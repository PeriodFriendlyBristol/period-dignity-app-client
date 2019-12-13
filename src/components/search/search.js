import React from "react";
import { Redirect } from "react-router-dom";
import { ReactComponent as Person } from "./svg/humaaan_3.svg";
import { ReactComponent as Geo } from "./svg/geo.svg";
import "./search.css";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      latlon: "",
      error: "",
      doSearch: false
    };

    this.postcodeChange = this.postcodeChange.bind(this);
    this.doPostcodeSearch = this.doPostcodeSearch.bind(this);
    this.doMyLocationSearch = this.doMyLocationSearch.bind(this);
  }

  postcodeChange(event) {
    this.setState({ postcode: event.target.value });
  }
  _handleKeyDown = e => {
    if (e.key === "Enter") {
      this.doPostcodeSearch();
    }
  };
  doPostcodeSearch() {
    if (this.state.postcode) {
      let url = `${process.env.REACT_APP_API_URL}/api/venue/?postcode=${this.state.postcode}`;
      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          //The server returns an object with a detail property specificing the error.
          //Todo check for error status codes as well
          if (data.detail) {
            //There is an error
            this.setState({ error: data.detail });
          } else {
            //Do search!
            this.setState({ venues: data.slice(0, 9), doSearch: true });
          }
        });
    } else {
      //Nothing entered
      this.setState({ error: "Please enter a postcode" });
    }
  }

  doMyLocationSearch = props => {
    if ("geolocation" in navigator) {
      // TODO: this test should enable/disable the button
      navigator.geolocation.getCurrentPosition(pos => {
        let url = `${process.env.REACT_APP_API_URL}/api/venue/?coordinates=${pos.coords.latitude},${pos.coords.longitude}`;
        fetch(url)
          .then(response => {
            return response.json();
          })
          .then(data => {
            //The server returns an object with a detail property specificing the error.
            //Todo check for error status codes as well
            if (data.detail) {
              //There is an error
              this.setState({ error: data.detail });
            } else if (data === undefined || data.length === 0) {
              //No venues found
              this.setState({ error: "No venues found for that location" });
            } else {
              //Do search!
              this.setState({ venues: data.slice(0, 9), doSearch: true });
            }
          });
      });
    } else {
      //Geolocation unavailable
      this.setState({ error: "Geolocation is unavailable" });
    }
  };

  render() {
    if (this.state.doSearch) {
      return (
        <Redirect
          to={{
            pathname: "/venues",
            state: { venues: this.state.venues, latlon: this.state.latlon }
          }}
        />
      );
    }

    return (
      <div className="search-component-container">
        <div className="search-row">
          <div classname="column human-wrapper">
            <Person className="human3 padding-left-" />
          </div>
          <div className="column search-wrapper">
            <div className="landing-text-3">
              Find a Period Friendly Box near you
            </div>
            <div className="search-input-container">
              <Geo id="geo-icon" onClick={this.doMyLocationSearch} />
              <input
                placeholder="my postcode, e.g. BS5 9QP"
                value={this.state.postcode}
                onChange={this.postcodeChange}
                onKeyDown={this._handleKeyDown}
                id="search-postcode"
                className="search-box"
              />
            </div>
            <p className="error">{this.state.error}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
