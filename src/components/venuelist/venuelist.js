import React from "react";
import "./venuelist.css";
import { ReactComponent as WC } from "./svg/wc-icon.svg";
import { ReactComponent as Access } from "./svg/accessible-icon.svg";

export default class VenueList extends React.Component {
  constructor(props) {
    super(props);
    this.days = {
      0: "monday",
      1: "tuesday",
      2: "wednesday",
      3: "thursday",
      4: "friday",
      5: "saturday",
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
                <div className="venue-details">
                  <h2>{venue.name}</h2>
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
                  <div class="venue-icons">
                    {venue.toilet ? <WC /> : <WC />}{" "}
                    {venue.wheelchair_access ? <Access /> : <Access />}
                  </div>
                  <p>
                    {venue.product_location !== "TBD" ? (
                      <span>venue.product_location</span>
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
