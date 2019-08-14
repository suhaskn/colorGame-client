import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class ButtonListContainer extends Component {
  render() {
    return (
      <div style={{ flexDirection: "row" }}>
        <NavLink to="/signup">
          <p>Sign Up</p>
        </NavLink>
        <NavLink to="/login">
          <p>Log In</p>
        </NavLink>
        <NavLink to="/room">
          <p>Rooms</p>
        </NavLink>
        <NavLink to="/start">
          <p>Start</p>
        </NavLink>
      </div>
    );
  }
}
