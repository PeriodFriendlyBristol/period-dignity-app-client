import React from 'react';
import MaterialIcon from 'material-icons-react';
import {NavLink} from 'react-router-dom';
import './nav.css';

class Nav extends React.Component {
  render () {
    return (
      <nav className="navbar">
         <ul className="nav-list">
          <NavLink to="/" activeClassName="active" className="nav-item">
            <MaterialIcon icon="search" alt="Find a Box"/>
            <div className="nav-text">Find a Box</div>
          </NavLink>
          <NavLink to="/host" activeClassName="active" className="nav-item">
            <MaterialIcon icon="favorite" alt="Host a Box"/>
            <div className="nav-text">Host a Box</div>
          </NavLink>
          <NavLink to="/about" activeClassName="active" className="nav-item">
            <MaterialIcon icon="person" alt="About"/>
            <div className="nav-text">About</div>
          </NavLink>
        </ul>
      </nav>
    )
  }
}

export default Nav;