import { combineReducers } from 'redux';
import players from './players/reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({ players, form: formReducer });

export default rootReducer;
