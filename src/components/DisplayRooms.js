import React from "react";

export default class DisplayRooms extends React.Component {
  onSubmit() {
    // let i = 4;
    // const select = document.getElementById("selectRoom");
    // var opt = document.createElement("option");
    // opt.value = i;
    // opt.innerHTML = i;
    // select.appendChild(opt);
    // i++;
  }

  onChange() {}

  render() {
    return (
      <div>
        <h2>Choose the room you want to play in or add your own</h2>

        <div>
          <form onSubmit={this.onSubmit}>
            <p>Room:</p>
            <select id="selectRoom">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <button type="submit">Add Room</button>
          </form>
        </div>
      </div>
    );
  }
}
