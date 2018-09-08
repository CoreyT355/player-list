import React, { Component } from 'react';
import PlayerCard from './playerCard';

class PlayerList extends Component {
  state = {};
  render() {
    const { players } = this.props;
    return (
      <div className="row">
        {players.map(player => (
          <PlayerCard key={player.player.id} player={player.player} />
        ))}
      </div>
    );
  }
}

export default PlayerList;
