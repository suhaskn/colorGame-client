import React from "react";
import { login } from "../actions";
import { connect } from "react-redux";

class DisplayLogin extends React.Component {
  state = {
    name: "",
    password: ""
  };

  onSubmit = event => {
    event.preventDefault();

    const { name, password } = this.state;

    this.props.login({ name, password });

    this.setState({ name: "", password: "" });
  };

  onChange = event => {
    const { value } = event.target;

    this.setState({ name: value });
  };

  render() {
    return (
      <div>
        <h2>Log In with name and password</h2>

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

const mapDispatchToProps = {
  login
};

export default connect(
  null,
  mapDispatchToProps
)(DisplayLogin);
