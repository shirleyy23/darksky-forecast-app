import React from 'react';

import { render, fireEvent } from './Store/Test/test-utils';

import '@testing-library/jest-dom/extend-expect';

import { Route } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
  test('home page is rendered correctly', () => {
    const { getByText } = render(
      <Route exact path="/">
        <App />
      </Route>
    );
    expect(getByText('Weather App')).toBeInTheDocument();
  });

  test('forecast page is rendered correctly', () => {
    const { getByText, getByTestId } = render(
      <Route exact path="/forecast/:id">
        <App />
      </Route>,
      {
        route: '/forecast/89084095,8490583940',
      }
    );
    const button = getByTestId('link');
    fireEvent.click(button);
    expect(getByText('Forecast')).toBeInTheDocument();
  });
});
