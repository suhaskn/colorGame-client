import React from "react";
import { connect } from "react-redux";
import CreateRoom from "./CreateRoom";
import { Link } from "react-router-dom";

class DisplayRooms extends React.Component {
  render() {
    console.log("this.props test:", this.props);
    const rooms = this.props.rooms.map(room => (
      <Link key={room.id} to={`/room/${room.id}`}>
        <div>{room.room_name}</div>
      </Link>
    ));

    console.log("rooms test:", rooms);

    return (
      <div>
        <CreateRoom />
        <div>{rooms}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms
  };
}

export default connect(mapStateToProps)(DisplayRooms);
