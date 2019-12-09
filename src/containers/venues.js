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

  render() {
    return (
      <div>
        <MapComponent
          mapData={this.state.mapData}
          venues={this.props.location.state.venues}
        />
        <VenueList venues={this.props.location.state.venues} />
      </div>
    );
  }
}
