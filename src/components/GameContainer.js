import React from "react";
import { correct, wrong } from "../actions";
import { connect } from "react-redux";

class GameContainer extends React.Component {
  handleClick = event => {
    let color = ["red", "blue", "yellow", "green"];

    for (let i = color.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [color[i], color[j]] = [color[j], color[i]];
    }
    const p1 = document.getElementById("p1");
    document.getElementsByClassName("sucessRate");

    if (p1.style.color === event.target.value) {
      this.props.correct(event.target.value);
    } else {
      this.props.wrong(event.target.value);
    }

    const word = color[0];
    const newColor = color[1];
    p1.textContent = word;
    p1.style.color = newColor;
  };

  render() {
    var pStyle = {
      color: "red",
      fontSize: "100px",
      fontWeight: "bold"
    };
    const userName = this.props.user;
    console.log("hello ", userName);
    const { goodAnswer, wrongAnswer } = this.props;
    const sucessRate = Math.floor(
      (goodAnswer.length / (goodAnswer.length + wrongAnswer.length)) * 100
    );

    return (
      <div>
        <h2>FAST!!! Pick the right color</h2>
        {/* <h3>{this.props.user}</h3> */}
        <div className="sucessRate">
          You scored: {!sucessRate ? "0" : sucessRate}%
        </div>
        <div>
          <p id="p1" style={pStyle}>
            {"yellow"}
          </p>
          <button value="red" onClick={this.handleClick}>
            RED
          </button>
          <button value="blue" onClick={this.handleClick}>
            BLUE
          </button>
          <button value="yellow" onClick={this.handleClick}>
            YELLOW
          </button>
          <button value="green" onClick={this.handleClick}>
            GREEN
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = { correct, wrong };

const mapStateToProps = state => ({
  goodAnswer: state.game.goodAnswer,
  wrongAnswer: state.game.wrongAnswer,
  user: state.userName
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameContainer);
