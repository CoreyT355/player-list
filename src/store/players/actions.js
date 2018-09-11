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

export function filterPlayers() {
  return (dispatch, getState) => {
    const filter = playersSelectors.getPlayerFilter(getState());
    let players = playersSelectors.getPlayers(getState());
    const filteredPlayers = players.players.filter(
      p => p.player.lastName.indexOf(filter) > -1
    );
    console.log('FILTERED PLAYERS', filteredPlayers);
    dispatch({ type: types.PLAYERS_FILTERED, filteredPlayers });
  };
}
