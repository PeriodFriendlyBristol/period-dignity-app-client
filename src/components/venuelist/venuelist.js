import React from "react";

export default class VenueList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      if (this.props.venues) {
        this.props.venues.map(venue => {
          console.log(venue);
          return (
            <div>
              <h2>{venue.name}</h2>
            </div>
          );
        });
      }
      return <div></div>;
    }
  }
}
