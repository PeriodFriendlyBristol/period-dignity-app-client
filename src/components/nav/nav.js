import React from 'react';
import MaterialIcon from 'material-icons-react';
import './nav.css';

class Nav extends React.Component {
  render () {
    return (
      <nav className="navbar">
         <ul className="nav-list">
          <li className="nav-item">
            <a href="/">
              <MaterialIcon icon="search" alt="Find a Box"/>
              <div className="nav-text">Find a Box</div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/host">
              <MaterialIcon icon='favorite' alt="Host a Box"/>
              <div className="nav-text">Host a Box</div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/about">
              <MaterialIcon icon='person' alt="About"/>
              <div className="nav-text">About</div>
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;