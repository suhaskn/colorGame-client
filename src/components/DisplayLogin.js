import React from "react";
import { setName } from "../actions";
import { connect } from "react-redux";

class DisplayLogin extends React.Component {
  state = { name: "" };

  onSubmit = event => {
    event.preventDefault();

    this.props.setName(this.state.name);

    this.setState({ name: "" });
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
            <input type="text" onChange={this.onChange} />
            <p>Password:</p>
            <input type="text" onChange={this.onChange} />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setName
};

export default connect(
  null,
  mapDispatchToProps
)(DisplayLogin);
