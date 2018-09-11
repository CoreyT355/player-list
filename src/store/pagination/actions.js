import * as types from './actionTypes';
import MsfService from '../../services/mySportsFeed';

export function receivePlayers(players) {
  return { type: types.PLAYERS_FETCHED, players };
}

export function fetchPlayers(query) {
  return async dispatch => {
    try {
      const players = await MsfService.getPlayerSearchResults(query);
      dispatch(receivePlayers(players));
    } catch (error) {
      console.error(error);
    }
  };
}

export function setSearchQuery(query) {
  return dispatch => {
    dispatch({ type: types.PLAYERS_SEARCHED, playerSearchQuery: query });
  };
}
