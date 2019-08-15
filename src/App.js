import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import DisplayLogin from "./components/DisplayLogin";
import GameContainer from "./components/GameContainer";
import ButtonListContainer from "./components/ButtonListContainer";
import DisplaySignUp from "./components/DisplaySignUp";
import CreateRoom from "./components/CreateRoom";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Color Game</h1>
        <ButtonListContainer />
        <Route exact path="/signup" component={DisplaySignUp} />
        <Route exact path="/login" component={DisplayLogin} />
        <Route exact path="/room" component={CreateRoom} />
        <Route exact path="/start" component={GameContainer} />
      </div>
    );
  }
}
