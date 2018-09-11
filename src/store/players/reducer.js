import initialState from '../initialState';
import { PLAYERS_FETCHED, PLAYERS_FILTERED } from '../players/actionTypes';

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case PLAYERS_FETCHED:
      return state.merge({
        players: action.players
      });

    // case PLAYERS_FILTERED:
    //   console.log('PLAYERS', state.players);
    //   const filteredPlayers = state.players.filter(
    //     p => p.player.lastName === action.playerFilter
    //   );
    //   return state.merge({
    //     filteredPlayers: filteredPlayers
    //   });

    default:
      return state;
  }
}

export function getPlayerFilter(state) {
  return state.playerFilter;
}

export function getFilteredPlayers(state) {
  return state.filteredPlayers;
}

export function getPlayers(state) {
  return state.players;
}
