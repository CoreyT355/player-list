import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar';
//import SearchBar from './components/searchBar';
import PlayerList from './components/playerList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    fetch(
      'https://api.mysportsfeeds.com/v2.0/pull/nfl/players.json?season=current&limit=50',
      {
        headers: new Headers({
          Authorization: `Basic ZWE0YjU1YzctZDc4My00ODRhLThjNmQtNTliN2ViOk1ZU1BPUlRTRkVFRFM=`
        })
      }
    )
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.setState({ players: data.players });
      });
  }
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          {/* <SearchBar /> */}
          <PlayerList players={this.state.players} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
