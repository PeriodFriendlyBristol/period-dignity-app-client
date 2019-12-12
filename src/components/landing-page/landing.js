import React from "react";
import Search from "../search/search";
import human3 from "../../assets/humaaan_3.svg";
import "./landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div className="container-circle">
        <div className="container-home">
          <div className="landing-text-1 ninty-five-padding-top">
            Free menstrual products for people in Bristol who need them
          </div>
          <div className="text-wrapper">
            {/* <ul>
                <li>Get free products when you need them</li>
                <li>Donate products to help others</li>
                </ul> */}
            <ul className="top-list custom-bullet-list">
              <li>Pick up points all over the city</li>
              <li>Donate products to help others</li>
            </ul>
          </div>
        </div>
        <div className="search-box-wrapper">
          <img src={human3} className="human3 padding-left-" alt="" />
          <div className="landing-text-3">
            Find a Period Dignity Box near you
          </div>
          <Search />
        </div>
      </div>
    );
  }
}

export default Landing;
