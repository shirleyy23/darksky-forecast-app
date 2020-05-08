import { combineReducers } from 'redux';

import locationReducer from './locationReducer';

import apiStateReducer from './apiStateReducer';

export const rootReducer = combineReducers({
  location: locationReducer,
  apiState: apiStateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
