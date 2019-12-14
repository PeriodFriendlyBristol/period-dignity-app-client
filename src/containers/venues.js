import React from "react";
import MapComponent from "../components/map/map.js";
import VenueList from "../components/venuelist/venuelist.js";

export default class Venues extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MapComponent venues={this.props.location.state.venues} />
        <VenueList venues={this.props.location.state.venues} />
      </div>
    );
  }
}
