import { combineReducers } from 'redux';
import { nextReducer } from './nextReducer';
import { abilityReducer } from './abilitiesReducer';

export default () =>
    combineReducers({
        next: nextReducer,
        ability: abilityReducer,
    });
