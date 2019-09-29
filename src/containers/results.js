import React from 'react'
import MapComponent from '../components/map/'
import Locations from '../components/locations/'

export default class Results extends React.Component {
  constructor(props) {
    super(props);

    console.log(props.location.state);
 
    this.state = {
      mapData: {
        markers: [[51.4545, -2.5879], [51.4500, -2.5850], [51.4450, -2.5800]],
        zoom: 13,
        lat: 51.4545,
        lng: -2.5879
      }
    }
  }

  render() {
    return(
      <div>
        <MapComponent mapData={this.state.mapData} />
        <Locations/>
      </div>
    ) 
  }
}
