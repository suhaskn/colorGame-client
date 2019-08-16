import React from "react";
import { correct, wrong } from "../actions";
import { connect } from "react-redux";
import { url } from "../constants";
import * as request from "superagent";

function GameView({ handleClick, room }) {
  if (room) {
    var style = {
      color: room.color,
      fontSize: "100px",
      fontWeight: "bold"
    };

    const points = room.users.map(user => {
      return (
        <div>
          {user.name}: {user.points}
        </div>
      );
    });

    return (
      <div>
        <div className="sucessRate">
          <h4>Points</h4>
          {points}
        </div>
        <h2>FAST!!! Pick the right color</h2>
        <div>
          <label id="pointsTag">Points: </label>
          <label id="pointsLabel">{"0"}</label>
        </div>
        <div>
          <p id="p1" style={style}>
            {room.word}
          </p>

          <button value="red" onClick={handleClick}>
            RED
          </button>
          <button value="blue" onClick={handleClick}>
            BLUE
          </button>
          <button value="yellow" onClick={handleClick}>
            YELLOW
          </button>
          <button value="green" onClick={handleClick}>
            GREEN
          </button>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}

class GameContainer extends React.Component {
  handleClick = event => {
    // let color = ["red", "blue", "yellow", "green"];

    // for (let i = color.length - 1; i > 0; i--) {
    //   const j = Math.floor(Math.random() * (i + 1));
    //   [color[i], color[j]] = [color[j], color[i]];
    // }
    // const p1 = document.getElementById("p1");
    // document.getElementsByClassName("sucessRate");

    // if (p1.style.color === event.target.value) {
    //   this.props.correct(event.target.value);
    // } else {
    //   this.props.wrong(event.target.value);
    // }

    // const word = color[0];
    // const newColor = color[1];
    // p1.textContent = word;
    // p1.style.color = newColor;
    const guess = event.target.value;

    const { jwt } = this.props;

    request
      .put(`${url}/room/guess/1`)
      .send({ jwt, guess })
      .then(response => {
        console.log("response test:", response);
      })
      .catch(error => {
        console.log("Something is wrong");
        console.log(error);
      });
  };

  start = async () => {
    const response = await request.put(
      `${url}/room/start/${this.props.match.params.id}`
    );

    console.log("response test:", response);
  };

  join = async () => {
    const { jwt } = this.props;
    const response = await request
      .put(`${url}/room/join/${this.props.match.params.id}`)
      .send({ jwt });

    console.log("response test:", response);
  };

  render() {
    const { rooms, match } = this.props;
    const { id } = match.params;
    console.log("rooms test:", rooms);
    console.log("id test:", id);
    const room = rooms.find(room => room.id === parseInt(id));
    console.log("room test:", room);

    const userName = this.props.user;
    console.log("hello ", userName);

    console.log("room test:", room);

    const round = room && room.round;
    console.log("round test:", round);

    const content =
      round === 0 ? (
        <div>
          <button onClick={this.start}>Start</button>
          <button onClick={this.join}>Join</button>
        </div>
      ) : (
        <GameView handleClick={this.handleClick} room={room} />
      );

    return content;
  }
}

const mapDispatchToProps = { correct, wrong };

const mapStateToProps = state => ({
  rooms: state.rooms,
  goodAnswer: state.game.goodAnswer,
  wrongAnswer: state.game.wrongAnswer,
  user: state.userName,
  jwt: state.userToken.jwt
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
