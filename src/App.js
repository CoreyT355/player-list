import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
import PlayerSearchScreen from './containers/playerSearchScreen';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <PlayerSearchScreen />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
