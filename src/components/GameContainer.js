import React from "react";
import { correct } from "../actions"
import { wrong } from "../actions"

export default class GameContainer extends React.Component {




  handleClick = event => {
    let color = ["red", "blue", "yellow", "green"];
    let cAnswer = 0
    let wAnswer = 0
    console.log(cAnswer)
    console.log(wAnswer)
    for (let i = color.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [color[i], color[j]] = [color[j], color[i]];
    }
    const p1 = document.getElementById("p1");

    if (p1.style.color === event.target.value) {
      //console.log('correct')
      console.log('correct variable', correct)
      cAnswer = cAnswer + 1
      console.log('cAnswer', cAnswer)
    }
    else {
      //console.log('wrong')
      console.log('wrong variable', wrong)
      wAnswer = wAnswer + 1
    }
    const word = color[0];
    const newColor = color[1];
    p1.textContent = word;
    p1.style.color = newColor;

  };


  render() {

    console.log('correct')
    const sucessRate = Math.floor(this.cAnswer / (this.cAnswer + this.wAnswer) * 100)

    var pStyle = {
      color: "red",
      fontSize: "100px",
      fontWeight: "bold"
    };

    return (
      <div>
        <h2>FAST!!! Pick the right color</h2>
        <h3>Score: {!sucessRate ? '0' : sucessRate}%</h3>

        <div>
          <p id="p1" style={pStyle}>
            {"yellow"}
          </p>
          <button value='red' onClick={this.handleClick}>RED</button>
          <button value='blue' onClick={this.handleClick}>BLUE</button>
          <button value='yellow' onClick={this.handleClick}>YELLOW</button>
          <button value='green' onClick={this.handleClick}>GREEN</button>
        </div>
      </div>
    );
  }
}
