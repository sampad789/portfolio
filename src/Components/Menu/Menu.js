import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Socials from "../Socials/Socials";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <nav className="menu">
        <ul className="links">
          <li>
            {" "}
            <NavLink activeClassName="active" to={"/"}>
              {" "}
              Home
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink activeClassName="active" to={"/about"}>
              {" "}
              About
            </NavLink>{" "}
          </li>
        </ul>
        <div className="align-right">
          <Socials />
        </div>
      </nav>
    );
  }
}

export default Menu;
