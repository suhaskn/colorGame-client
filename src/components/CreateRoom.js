import React from "react";
import * as request from "superagent";
import { url } from "../constants";
import { allRooms } from "../actions";
// import { connect } from "react-redux";

export default class CreateRoom extends React.Component {
  state = { room_name: '' }

  onSubmit = async (event) => {
    event.preventDefault()

    await request 
      .post(`${url}/room`)
      .send( { room_name: this.state.room_name })
      .then(response => {
        this.setState({ room_name: '' });
        console.log('this.state', this.state)
      });
  }

  onChange = (event) => {
    const { value } = event.target

    this.setState({ room_name: value })
  }

  render() {
    return (
      <div>
        <h2> Make a room </h2>

        <div>

          <form onSubmit={this.onSubmit}>
            <input type="text"
              name="room_name"
              required
              value={this.state.room_name}
              onChange={this.onChange} />
            <button type="submit"> Add Room </button>
          </form>

        </div>

        <div>
          {allRooms}
        </div>
      
      </div>
    );
  }
}
