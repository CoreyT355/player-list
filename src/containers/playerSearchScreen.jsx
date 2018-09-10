import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as playerActions from '../store/players/actions';
import * as playerSelectors from '../store/players/reducer';
import PlayerList from '../components/playerList';
import SearchBar from '../containers/searchBar';

class PlayerSearchScreen extends Component {
  componentDidMount() {
    this.props.dispatch(playerActions.fetchPlayers());
  }

  handlePlayerSearch = values => {
    this.props.dispatch(playerActions.fetchPlayers(values.searchQuery));
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar onSubmit={this.handlePlayerSearch} />
        {this.props.players.players
          ? this.renderPlayerList(this.props.players.players)
          : this.renderLoading()}
      </React.Fragment>
    );
  }
  renderLoading() {
    return <p>Loading...</p>;
  }
  renderPlayerList(players) {
    return <PlayerList players={players} />;
  }
}
function mapStateToProps(state) {
  return { players: playerSelectors.getPlayers(state) };
}

export default connect(mapStateToProps)(PlayerSearchScreen);
