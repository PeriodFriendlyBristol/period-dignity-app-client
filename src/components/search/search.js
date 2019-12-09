import React from "react";
import { Redirect } from "react-router-dom";
import { ReactComponent as Person } from './svg/humaaan_3.svg';



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
      <div className="search-component-container">
        <div className="flex">
          <div classname="column">
            <Person className="human3 padding-left-" />
          </div>
          <div className="column padding-right-1">
            <div className="landing-text-3">Find a Period Friendly Box near you</div>
          </div>
      </div>
        <div className="input-align flex">
          <div className="row">
            <input
                placeholder="my postcode, e.g. BS5 9QP"
                value={this.state.postcode}
                onChange={this.postcodeChange}
                id="search-postcode"
                className="search-box"
                icon="search"/>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
