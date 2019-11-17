import React from 'react';
import MaterialIcon from 'material-icons-react';

class Footer extends React.Component {
  render () {
    return (
      <footer className="footer">
        <div>
          <ul className="div-ul">
            <li className="icon-left footer-text">
              <MaterialIcon icon="my_location" color="#FBAF1E" />
            </li>
            <li className="icon-center">
              <MaterialIcon icon="favorite" color="white" />
            </li>
            <li className="icon-right">
              <MaterialIcon icon="person" color="white" />
            </li>
          </ul>
          <ul>
            <li className="left-li footer-text selected-text" color="#FBAF1E">
              Find a Box
            </li>
            <li className="center-li footer-text padding-right-half" color="white">
              Host a Box
            </li>
            <li className="right-li footer-text padding-right-1" color="white">
              About
            </li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer;