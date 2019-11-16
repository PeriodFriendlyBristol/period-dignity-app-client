import React from "react";
import "./venuelist.css";
export default class VenueList extends React.Component {
  constructor(props) {
    super(props);
    this.days = {
      0: "monday",
      1: "tuesday",
      6: "sunday"
    };
  }
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {
    let dayIndex = new Date().getDay();
    let day = this.days[dayIndex];
    let dayOpen = day + "_open";
    let dayClose = day + "_close";

    if (this.props.venues) {
      return (
        <ul className="venues-list">
          {this.props.venues.map((venue, index) => {
            {
              index++;
            }
            return (
              <li key={`marker-${index}`} className="venue">
                <img src={require("../../assets/pins/pin-" + index + ".svg")} />
                <div class="description">
                  <strong>{venue.name}</strong>
                  <p>
                    {venue[dayOpen] ? (
                      <span>
                        {this.capitalize(day)}, open{" "}
                        {venue[dayOpen].slice(0, -3)}, closes at{" "}
                        {venue[dayClose].slice(0, -3)}
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <ul>
          <li>Loading</li>
        </ul>
      );
    }
  }
}
