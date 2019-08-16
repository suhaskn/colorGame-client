import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import DisplayLogin from "./components/DisplayLogin";
import GameContainer from "./components/GameContainer";
import ButtonListContainer from "./components/ButtonListContainer";
import DisplaySignUp from "./components/DisplaySignUp";
import DisplayRooms from "./components/DisplayRooms";
import { url } from './constants'
import { connect } from 'react-redux'
import { allRooms } from './actions'

class App extends React.Component {
  source = new EventSource(`${url}/stream`)

  componentDidMount () {
    this.source.onmessage = (event) => {
      const rooms = JSON.parse(event.data)

      //console.log('rooms test:', rooms)
      this.props.allRooms(rooms)
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Color Game</h1>
        <ButtonListContainer />
        <Route exact path="/signup" component={DisplaySignUp} />
        <Route exact path="/login" component={DisplayLogin} />
        <Route exact path="/room" component={DisplayRooms} />
        <Route exact path="/start" component={GameContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = { allRooms }

export default connect(null, mapDispatchToProps)(App)