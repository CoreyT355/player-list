import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as playerActions from '../store/players/actions';
import * as playerSelectors from '../store/players/reducer';
import PlayerList from '../components/playerList';
import SearchBar from '../containers/searchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as _ from 'lodash';

class PlayerSearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredPlayers: this.props.players
    };
  }

  componentDidMount() {
    this.props.dispatch(playerActions.fetchPlayers());
  }

  handlePlayerSearch = event => {
    //this.props.dispatch(playerActions.filterPlayers(values.searchQuery));
    console.log('STATE', this.state);
    console.log('EVENT', event);
    const filteredPlayers = _.filter(
      playerSelectors.getPlayers(this.state),
      p => p.player.lastName === event.searchQuery
    );
    this.setState({
      filteredPlayers
    });
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
function mapStateToProps(state) {
  return {
    players: playerSelectors.getPlayers(state)
  };
}

export default connect(mapStateToProps)(PlayerSearchScreen);
