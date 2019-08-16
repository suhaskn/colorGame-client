// import React from "react";
// //import * as request from "superagent";
// //import { url } from "../constants";

// class EnterRoom extends React.Component {
//   render() {
//     const { roomId } = this.props.match.params

//     console.log('channelId test:', roomId)

//     console.log('this.props.channels:', this.props.rooms)

//     const channel = this.props.rooms
//       .find(room => {
//         console.log('find channel test:', room)
//         return room.id === parseInt(roomId)
//       })

//     console.log('channel test:', room)

//     return <div>
//       <h3>{room.room_name}</h3>


//       <div>
//         {EnterRoom
//           // .messages
//           // .reverse()
//           // .map(message => <div>
//           //   {message.user}: {message.text}
//           // </div>)
//         }
//       </div>
//     </div>
//   }
// }

// function mapStateToProps (state) {
//   console.log('state test:', state)
//   return {
//     rooms: state.rooms,
//     //user: state.user
//   }
// }

// export default connect(
//   mapStateToProps
// )(EnterRoom)

// //   state = { room: " "}

// //     handleClickJoin = async event => {
// //       event.preventDefault();
// //       console.log("event.target.value", event.target.value);
  
// //       this.setState({
// //         redirect: true,
// //         id: event.target.value
// //       });
  
// //       await request.put(`${url}/room/${event.target.value}`).send({
// //         id: event.target.value,
// //         //userId: this.props.user.id
// //       });
// //     }

// //   render() {
// //     return(
// //     <button
// //       className="Join Room"
// //       value={room.id}
// //       onClick={this.handleClickJoin}>
// //         Join Room
// //   </button>
// //     )
// //   }
// // }