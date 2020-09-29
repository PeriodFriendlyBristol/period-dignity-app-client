import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header id="header">
          <a href="/">
            <div className="header">Period Friendly Bristol</div>
          </a>
        </header>
        <div style={{ 'background-color': 'orange', 'padding': '.5em' }}>
          Most of our Donation Points and Collections Centres are still closed due to Covid-19. Please contact your local food bank if you need to access period products. We will keep you updated as our corporate partners begin a phased return to work and our collection centres reopen. The PFB team.
        </div>
      </div>
    );
  }
}

export default Header;
