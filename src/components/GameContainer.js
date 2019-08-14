import React from "react";

export default class GameContainer extends React.Component {
  handleClick = event => {
    let color = ["red", "blue", "yellow", "green"];
    for (let i = color.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [color[i], color[j]] = [color[j], color[i]];
    }
    const p1 = document.getElementById("p1");
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

    return (
      <div>
        <h2>FAST!!! Pick the right color</h2>
        <h3>Score: </h3>

        <div>
          <p id="p1" style={pStyle}>
            {"yellow"}
          </p>
          <button onClick={this.handleClick}>RED</button>
          <button onClick={this.handleClick}>BLUE</button>
          <button onClick={this.handleClick}>YELLOW</button>
          <button onClick={this.handleClick}>GREEN</button>
        </div>
      </div>
    );
  }
}
