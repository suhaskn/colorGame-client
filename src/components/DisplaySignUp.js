import React from "react";
import { connect } from "react-redux";
import * as request from "superagent";

export default class DisplaySignUp extends React.Component {
  state = {
    name: "",
    password: ""
  };

  onSubmit(event) {
    event.preventDefault();

    const { name, password } = this.state;

    request
      .post("/user")
      .send({ name, password })
      .then(response => {
        this.setState({ name: "", password: "" });
      });
  }

  onChange(event) {
    const { name, password } = event.target;

    this.setState({ name: name, password: password });
  }

  render() {
    return (
      <div>
        <h2>Please register with user name and password</h2>

        <div>
          <form onSubmit={this.onSubmit}>
            <p>Name:</p>
            <input type="text" value="name" onChange={this.onChange} />
            <p>Password:</p>
            <input type="text" value="password" onChange={this.onChange} />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
