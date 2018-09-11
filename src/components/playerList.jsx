import React, { Component } from 'react';
//import Pagination from '../containers/pagination';
import PlayerCard from './playerCard';

class PlayerList extends Component {
  render() {
    const { players } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          {players.map(player => (
            <PlayerCard key={player.player.id} player={player.player} />
          ))}
        </div>
        {/* <div className="row justify-content-center">
          <Pagination />
        </div> */}
      </React.Fragment>
    );
  }
}

export default PlayerList;
