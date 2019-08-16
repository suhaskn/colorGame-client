import React from "react";
import * as request from "superagent";
import { url } from "../constants";
import "./DisplaySignUp.css"

export default class DisplaySignUp extends React.Component {
  state = {
    name: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const { name, password } = this.state;

    request
      .post(`${url}/user`)
      .send({ name, password })
      .then(response => {
        this.setState({ name: "", password: "" });
        console.log("User added to database");
      });
  };

  onChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div class="signup">
        <h2>Please register with user name and password</h2>

        <div>
          <form onSubmit={this.onSubmit}>
            <p>Name:</p>
            <input
              type="text"
              value={this.state.name}
              placeholder="name"
              name="name"
              onChange={this.onChange}
            />
            <p>Password:</p>
            <input
              type="password"
              value={this.state.password}
              placeholder="password"
              name="password"
              onChange={this.onChange}
            />
            <br />
            <button class="btn done" type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
