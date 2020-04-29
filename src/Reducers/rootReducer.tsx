import { combineReducers } from 'redux';

import locationReducer from './locationReducer';

export const rootReducer = combineReducers({
  location: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
