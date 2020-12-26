nes(6 sloc)  180 Bytes

import { combineReducers } from 'redux';

import { thingsReducer } from './things';

const rootReducer = combineReducers({
  things: thingsReducer,
});

export default rootReducer;