import React from 'react';
import MaterialIcon from 'material-icons-react';
import './nav.css';

class Nav extends React.Component {
  render () {
    return (
      <nav className="navbar">
         <ul>
          <li class="nav-item"><a href="/">Find a Box</a></li>
          <li class="nav-item"><a href="/host">Host a Box</a></li>
          <li class="nav-item"><a href="/about">About</a></li>
        </ul>
      </nav>
    )
  }
}

export default Nav;