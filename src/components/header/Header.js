import React, { useState } from 'react';
import './header.css';
import { Link} from 'react-router-dom';

function Header() {

  return (

    <nav className="navbar">
      <div className="logo">BetBoost</div>

      <ul className="nav-links">

        <input type="checkbox" id="checkbox_toggle" />
        <label for="checkbox_toggle" className="hamburger">&#9776;</label>

        <div className="menu">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/subscriptions">Subscriptions</Link></li>
        

          {/* <li className="services">
            <a to="/">Services</a>

            <ul className="dropdown">
              <li><a to="/">Dropdown 1 </a></li>
              <li><a to="/">Dropdown 2</a></li>
              <li><a to="/">Dropdown 2</a></li>
              <li><a to="/">Dropdown 3</a></li>
              <li><a to="/">Dropdown 4</a></li>
            </ul>

          </li> */}
          <li><Link to="/policy">Policy</Link></li>
        </div>
      </ul>
    </nav>
  );
}

export default Header