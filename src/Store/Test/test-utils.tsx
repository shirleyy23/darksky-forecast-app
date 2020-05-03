// test-utils.js
import React, { ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialState, locationReducer } from '../../Reducers/locationReducer';
import { Location } from '../Types/types';
import { RootState, rootReducer } from '../../Reducers/rootReducer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const defaultData = {
  location: {
    ...initialState,
  },
};

const history = createMemoryHistory();

function render(
  ui: ReactElement,
  {
    initialState: RootState = defaultData,
    store = createStore(rootReducer, defaultData),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: any) {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };
