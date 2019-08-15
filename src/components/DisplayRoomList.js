import React from "react";
import { allRooms } from '../actions'
import { connect } from 'react-redux'
//import { url } from '../constants'
//import { Link } from 'react-router-dom'

class DisplayRooms extends React.Component {
  state = { message: '' }

  //source = new EventSource(`${url}/stream`)

  componentDidMount () {
    this.source.onmessage = (event) => {
      const rooms = JSON.parse(event.data)

      console.log('rooms test:', rooms)

      this.props.allRooms(rooms)
    }
  }

  render () {
    console.log('this.props test:', this.props)
    const rooms = this
      .props
      .rooms
      .map(channel => 
      <div
        key={room.id}
        to={'/room'}
      >
        <div>{rooms.room_name}</div>
      </div>)

    console.log('rooms test:', rooms)

    return <div>
      {rooms}
    </div>
  }
}

function mapStateToProps (state) {
  return {
    rooms: state.rooms,
  }
}

const mapDispatchToProps = {
  allRooms
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(DisplayRooms)