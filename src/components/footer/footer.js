import React from 'react';
import MaterialIcon from 'material-icons-react';

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <div className="div-ul">
          <div>
            <li className="icon-left footer-text">
              <MaterialIcon icon="my_location" color="#FBAF1E" />
            </li>
            <li className="left-li footer-text selected-text padding-top-half">
              Find a Box
            </li>
          </div>
          <div>
            <li className="icon-center">
              <MaterialIcon icon="favorite" color="white" />
            </li>
            <li className="center-li footer-text">
            Host a Box
            </li>
          </div>
          <div>
            <li className="icon-right">
              <MaterialIcon icon="person" color="white" />
            </li>
            <li className="right-li footer-text">
            About
            </li>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;