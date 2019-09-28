import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer, LeafletConsumer } from 'react-leaflet'
import L from 'leaflet';

export default class MapComponent extends React.Component {
  getIcon(number) {
    const icon = new L.Icon({
      iconUrl: require('./pin-'+number+'.svg'),
      iconRetinaUrl: require('./pin-'+number+'.svg'),
      iconSize: new L.Point(60, 75),
    });
    return icon;
  }

  render() {
    const position = [this.props.mapData.lat, this.props.mapData.lng];
    return(
      <Map center={position} zoom={this.props.mapData.zoom}>
        <TileLayer 
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {this.props.mapData.markers.map((position, idx) => 
          <Marker key={`marker-${idx+1}`} position={position} icon={this.getIcon(idx+1)}>
          </Marker>
        )}
        <LeafletConsumer>
          {context => {
            const map = context.map;
          }}
        </LeafletConsumer>
      </Map>
    ) 
  }
}