import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import DisplayLogin from "./components/DisplayLogin";
import GameContainer from "./components/GameContainer";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Color Game</h1>
        <Route exact path="/login" component={DisplayLogin} />

        <Route exact path="/start" component={GameContainer} />
      </div>
    );
  }
}
