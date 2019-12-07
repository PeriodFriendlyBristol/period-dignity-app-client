import React from "react";
import { Redirect } from "react-router-dom";

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

  doPostcodeSearch() {
    if (this.state.postcode) {
      //TODO: replace with env variable.
      let url =
        "http://localhost:8000/api/venue/?postcode=" + this.state.postcode;

      fetch(url)
        .then(response => {
          return response.json();
        })
        .then(data => {
          //The server returns an object with a detail property specificing the error.
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
        this.setState({
          location: pos.coords.latitude + "," + pos.coords.longitude,
          doSearch: true
        });
      });
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
      <div className="padding-top-11 Search-Component-header">
        {/* Needs to be moved to the right */}
        <div className="landing-text-3">Find a Period Dignity Box near you</div>
        <div>
          <input
            placeholder="my postcode, e.g. BS5 9QP"
            value={this.state.postcode}
            onChange={this.postcodeChange}
            id="search-postcode"
            className="search-box"
          />
          <p className="error">{this.state.error}</p>
        </div>
        <div>
          <button onClick={this.doPostcodeSearch}>Search</button>
          <button onClick={this.doMyLocationSearch}>
            Use My Current Location
          </button>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
