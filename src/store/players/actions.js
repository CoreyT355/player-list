import * as types from './actionTypes';
import MsfService from '../../services/mySportsFeed';
import * as playersSelectors from './reducer';

export function receivePlayers(players) {
  return { type: types.PLAYERS_FETCHED, players };
}

export function fetchPlayers(query) {
  return async (dispatch, getState) => {
    try {
      const players = await MsfService.getPlayerSearchResults(query);
      dispatch(receivePlayers(players));
    } catch (error) {
      console.error(error);
    }
  };
}

export function setPlayerFilter(filter) {
  return (dispatch, getState) => {
    dispatch({ type: types.PLAYERS_FILTER, playerFilter: filter });
  };
}

export function filterPlayers(filter) {
  return (dispatch, getState) => {
    let players = playersSelectors.getPlayers(getState());
    if (!filter) {
      dispatch({ type: types.PLAYERS_FILTERED, players });
    } else {
      const filteredPlayers = players.players.filter(p =>
        p.player.lastName.toLowerCase().includes(filter.toLowerCase())
      );
      dispatch({ type: types.PLAYERS_FILTERED, filteredPlayers });
    }
  };
}
