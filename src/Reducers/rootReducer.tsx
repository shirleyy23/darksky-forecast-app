import { combineReducers } from 'redux';

import locationReducer from './locationReducer';

import apiStateReducer from './apiStateReducer';

import formSubmitReducer from './formSubmitReducer';

export const rootReducer = combineReducers({
  location: locationReducer,
  apiState: apiStateReducer,
  formSubmit: formSubmitReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
