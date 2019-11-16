import React from "react";
import MapComponent from "../components/map/map.js";
import VenueList from "../components/venuelist/venuelist.js";

export default class Venues extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mapData: {
        markers: [
          [51.4545, -2.5879],
          [51.45, -2.585],
          [51.445, -2.58]
        ],
        zoom: 13,
        lat: 51.4545,
        lng: -2.5879
      }
    };
  }

  componentDidMount() {
    this.getVenues();
  }

  async getVenues() {
    const response = await fetch("http://localhost:8000/api/venue/");
    let venues = await response.json();
    this.setState({ venues: venues.slice(0, 9) });
  }

  render() {
    return (
      <div>
        <MapComponent mapData={this.state.mapData} />
        <VenueList venues={this.state.venues} />
      </div>
    );
  }
}
