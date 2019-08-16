import React from "react";
import { connect } from 'react-redux';
import CreateRoom from './CreateRoom';
//import EnterRoom from "./EnterRoom";

class DisplayRooms extends React.Component {
  render () {
    //console.log('this.props test:', this.props)
    const rooms = this
      .props
      .rooms
      .map(room => 
      <div
        key={room.id}
        to={'/room'}
      >
        <div>{room.room_name}</div>
        
      </div>)

    console.log('rooms test:', rooms)

    return <div>
      <CreateRoom />
      <div>
        {rooms}
        
      </div>
    </div>
  }
}

function mapStateToProps (state) {
  return {
    rooms: state.rooms,
  }
}

export default connect(
  mapStateToProps
)(DisplayRooms)