import React from "react";
import MaterialIcon from "material-icons-react";
import "./venue-list.css";
import { ReactComponent as WC } from "./svg/wc-icon.svg";
import { ReactComponent as Access } from "./svg/accessible-icon.svg";

export default class VenueList extends React.Component {
  constructor(props) {
    super(props);
    this.days = {
      1: "monday",
      2: "tuesday",
      3: "wednesday",
      4: "thursday",
      5: "friday",
      6: "saturday",
      7: "sunday",
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
                <img
                  src={require("../../assets/pins/pin-" + index + ".svg")}
                  alt={`Location ${index}`}
                />
                <div className="venue-details">
                  <h2>{venue.name}</h2>
                  <p>
                    {venue.opening_hours ? (
                      venue[dayOpen] ? (
                        <span>
                          {this.capitalize(day)}, open{" "}
                          {venue[dayOpen].slice(0, -3)}, closes at{" "}
                          {venue[dayClose].slice(0, -3)}
                        </span>
                      ) : (
                        <span>Closed today</span>
                      )
                    ) : (
                      <span></span>
                    )}
                  </p>
                  <div className="venue-icons">
                    {venue.toilet ? <WC /> : <span></span>}{" "}
                    {venue.wheelchair_access ? <Access /> : <span></span>}
                  </div>
                  <p>
                    {venue.product_location !== "TBD" ? (
                      <span>{venue.product_location}</span>
                    ) : (
                      <span></span>
                    )}
                  </p>
                </div>
                <div className="venue-direction">
                  <a
                    href={
                      "https://www.google.co.uk/maps/place/" +
                      venue.location.latitude +
                      "," +
                      venue.location.longitude
                    }
                  >
                    <MaterialIcon icon="directions" color="#8C0571" />
                  </a>
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
