import React from "react";
import { Map, Marker, TileLayer, LeafletConsumer } from "react-leaflet";
import L from "leaflet";

export default class MapComponent extends React.Component {
  getIcon(number) {
    const icon = new L.Icon({
      iconUrl: require("../../assets/pins/pin-" + number + ".svg"),
      iconRetinaUrl: require("../../assets/pins/pin-" + number + ".svg"),
      iconSize: new L.Point(30, 42.5)
    });
    return icon;
  }

  render() {
    let position = [this.props.mapDefaults.lat, this.props.mapDefaults.lng];
    if (this.props.venues) {
      position = [
        this.props.venues[0].location.latitude,
        this.props.venues[0].location.longitude
      ];
      return (
        <Map center={position} zoom={this.props.mapDefaults.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.venues.map((venue, index) => {
            return (
              <Marker
                key={`marker-${index + 1}`}
                position={Object.values(venue.location)}
                icon={this.getIcon(index + 1)}
              ></Marker>
            );
          })}
          {/*
          <LeafletConsumer>
            {context => {
              // const map = context.map;
            }}
          </LeafletConsumer>
          */}
        </Map>
      );
    } else {
      return (
        <Map center={position} zoom={this.props.mapData.zoom}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </Map>
      );
    }
  }
}
