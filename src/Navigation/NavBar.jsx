import React from "react";
import { NavLink } from "react-router-dom";

import ".././css/navBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about us</NavLink>
          </li>
          <li>
            <NavLink to="/progress">our progress</NavLink>
          </li>
          <li>
            <NavLink to="/proposal">the proposal</NavLink>
          </li>
          <li>
            <NavLink to="/photos">favorite photos</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
