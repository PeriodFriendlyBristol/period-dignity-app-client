import React from "react";
import MapComponent from "../map/map.js";
import VenueList from "../venue-list/venue-list.js";

import "./venues.css";

export default class Venues extends React.Component {
  render() {
    return (
      <>
        <div id="cell-1" class="cell map-cell">
          <MapComponent venues={this.props.location.state.venues} />
        </div>

        {/* <div id="cell-2" class="cell"></div>
        <div id="cell-3" class="cell"></div>
        <div id="cell-4" class="cell"></div> */}
        <div id="cell-5" class="cell venues-cell">
          <VenueList venues={this.props.location.state.venues} />
        </div>
        <div id="bg-top"></div>
        <div id="bg-bottom"></div>
      </>
    );
  }
}
