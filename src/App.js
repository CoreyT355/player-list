import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import PlayerSearchScreen from './containers/playerSearchScreen';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faSearch,
  faFootballBall
} from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDoubleLeft, faAngleDoubleRight, faSearch, faFootballBall);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container bg-light">
          <PlayerSearchScreen />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
