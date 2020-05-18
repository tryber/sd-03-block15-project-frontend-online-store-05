import React from 'react';
import logo from '../img/white_logo.png';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="header-container">
          <img src={logo} alt="logo" />
          <nav>
            <li><a href="/">Home</a></li>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
