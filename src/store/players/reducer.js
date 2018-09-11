import initialState from '../initialState';
import {
  PLAYERS_FETCHED,
  PLAYERS_SEARCHED,
  PLAYERS_FILTERED
} from '../players/actionTypes';

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case PLAYERS_FETCHED:
      return state.merge({
        players: action.players
      });

    case PLAYERS_FILTERED:
      return state.merge({
        playerFilter: action.playerFilter
      });

    default:
      return state;
  }
}

export function getPlayerFilter(state) {
  return state.playerFilter;
}

export function getPlayers(state) {
  return state.players;
}
