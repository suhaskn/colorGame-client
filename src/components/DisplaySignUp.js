import React from "react";

export default class DisplaySignUp extends React.Component {
  onSubmit() {}

  onChange() {}

  render() {
    return (
      <div>
        <h2>Please register with user name and password</h2>

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
