import initialState from '../initialState';
import { PLAYERS_FETCHED, PLAYERS_SEARCHED } from '../players/actionTypes';

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case PLAYERS_FETCHED:
      return state.merge({
        players: action.players
      });
    case PLAYERS_SEARCHED:
      return state.merge({
        playerSearchQuery: action.playerSearchQuery
      });

    default:
      return state;
  }
}

export function getPlayerSearchQuery(state) {
  return state.playerSearchQuery;
}

export function getPlayers(state) {
  return state.players;
}
