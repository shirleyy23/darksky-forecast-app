// test-utils.js
import React, { ReactElement } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialState } from '../../Reducers/locationReducer';
import { RootState, rootReducer } from '../../Reducers/rootReducer';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const defaultData = {
  location: {
    ...initialState,
  },
};

function render(
  ui: ReactElement,
  {
    initialState: RootState = defaultData,
    store = createStore(rootReducer, defaultData),
    route = '/',
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }: any) {
    const history = createMemoryHistory();
    history.push(route);
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
