import React from "react";
import MapComponent from "../components/map/map.js";
import VenueList from "../components/venuelist/venuelist.js";

export default class Venues extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      venues: null,
      mapData: {
        zoom: 11,
        lat: 51.4545,
        lng: -2.5879
      }
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/venue/")
      .then(response => response.json())
      .then(venues => {
        this.setState({ venues: venues.slice(0, 9) });
      });
  }

  render() {
    return (
      <div>
        <MapComponent mapData={this.state.mapData} venues={this.state.venues} />
        <VenueList venues={this.state.venues} />
      </div>
    );
  }
}
