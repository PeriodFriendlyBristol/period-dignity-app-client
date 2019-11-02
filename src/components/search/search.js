import React from "react";
import { Redirect } from "react-router-dom";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: "",
      latlon: "",
      doSearch: false
    };

    this.postcodeChange = this.postcodeChange.bind(this);
    this.doPostcodeSearch = this.doPostcodeSearch.bind(this);
    this.doMyLocationSearch = this.doMyLocationSearch.bind(this);
  }

  postcodeChange(event) {
    this.setState({ postcode: event.target.value });
  }

  doPostcodeSearch = props => {
    this.setState({ doSearch: true });
  };

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
    console.log(this.state);

    if (this.state.doSearch) {
      console.log("redirecting");
      console.log(this.state);
      return (
        <Redirect
          to={{
            pathname: "/venues",
            state: { postcode: this.state.postcode, latlon: this.state.latlon }
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