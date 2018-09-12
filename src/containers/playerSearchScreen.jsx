import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as playerActions from '../store/players/actions';
import * as playerSelectors from '../store/players/reducer';
import PlayerList from '../components/playerList';
import SearchBar from '../containers/searchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PlayerSearchScreen extends Component {
  componentDidMount() {
    this.props.fetchPlayers;
  }

  handlePlayerSearch = values => {
    this.props.filterPlayers(values.searchQuery);
  };

  handleReset = () => {
    this.props.filterPlayers('');
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar
          onSubmit={this.handlePlayerSearch}
          onReset={this.handleReset}
        />
        {this.props.players.players
          ? this.renderPlayerList(
              this.props.players.filteredPlayers || this.props.players.players
            )
          : this.renderLoading()}
      </React.Fragment>
    );
  }
  renderLoading() {
    return (
      <div className="row justify-content-center mt-5">
        <FontAwesomeIcon icon="football-ball" size="6x" spin />
      </div>
    );
  }
  renderPlayerList(players) {
    return <PlayerList players={players} />;
  }
}
const mapStateToProps = state => {
  return {
    players: playerSelectors.getPlayers(state),
    filteredPlayers: playerSelectors.getFilteredPlayers(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlayers: dispatch(playerActions.fetchPlayers()),
    filterPlayers: filter => dispatch(playerActions.filterPlayers(filter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerSearchScreen);
