import React from "react";
import * as request from "superagent";
import { url } from "../constants";
import { allRooms } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CreateRoom extends React.Component {
  state = { room_name: '' }

  onSubmit = async (event) => {
    event.preventDefault()

    const { room_name } = this.state;

    const response = await request 
      .post(`${url}/room`)
      .send({ room_name })

    console.log('response test:', response)

    this.setState({ room_name: '' });
    //console.log('this.state', this.state)
  }

  onChange = (event) => {
    const { value } = event.target

    this.setState({ room_name: value })
    //console.log('this.setState', this.setState)
  }

  render() {
    return (
      <div>
        <h2> Make a room </h2>

        <div>

          <form onSubmit={this.onSubmit}>
            <input type="text"
              name="room_name"
              variant="success"
              required
              value={this.state.room_name}
              placeholder={'Name of your room'}
              onChange={this.onChange} />
            <button type="submit"> Add Room </button>
          </form>
        </div>
        <Link to={`${url}/room/1`}>
          <button type="button"> 
            Join the Room
          </button> 
        </Link>
      </div>
    );
  }
}
const mapDispatchToProps = {
  allRooms
}

export default connect(
  null,
  mapDispatchToProps
)(CreateRoom)