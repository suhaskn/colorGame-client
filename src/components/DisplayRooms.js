import React from "react";
import { connect } from 'react-redux';
import CreateRoom from './CreateRoom';

class DisplayRooms extends React.Component {
  onClick = (event) => {
    this.props.history.push(`/room/join/${event.target.id}`)
  }

  render () {
    console.log('this.props test:', this.props)
    if(!this.props.rooms) return 'Loading...'

    const rooms = this
      .props
      .rooms
      .map(room => 
      <div key={room.id}> 
        <button
          id= {room.id}
          key={room.id}
          name={'/room'}
          onClick={this.onClick} > Join the game {room.room_name} </button>
      </div>)

    return <div>
      <CreateRoom />
        {rooms}
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