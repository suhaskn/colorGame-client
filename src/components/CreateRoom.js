import React from "react";
import * as request from "superagent";
//import allRooms from "../actions"

export default class CreateRoom extends React.Component {
  state = { room_name: '' }

  onSubmit = async (event) => {
    event.preventDefault()

    await request 
      .post('http://localhost:3000/room')
      .send( { room_name: this.state.room_name })
      .then(response => {
        this.setState({ room_name: '' });
      });
    // let i = 4;
    // const select = document.getElementById("selectRoom");
    // var opt = document.createElement("option");
    // opt.value = i;
    // opt.innerHTML = i;
    // select.appendChild(opt);
    // i++;
  }

  onChange = (event) => {
    const { value } = event.target

    this.setState({ room_name: value })
  }

  // componentDidMount() {
  //   this.source.onroom = (event) => {
  //     console.log('event.data.test', event.data)
  //     const rooms = JSON.parse(event.data)
     
  //     this.allRooms(rooms)
  //   }
  // }

  render() {
    //state is empty object. We need to get the list from the database.
    // const allRooms = 
    // //console.log('this.state', this.state)
    // this
    // .rooms
    // .map(room => { 
    //   return <li> { room.room_name } </li>
    // })

    const allRooms = () => (dispatch, getState) => {
      if (getState().rooms) return
      request('http://localhost:3000/room')
        .then(response => {
          dispatch(allRooms(response.body))
        })
        .catch(console.error)
    }

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
            { allRooms }
        </div>
      </div>
    );
  }
}