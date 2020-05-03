import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import '@testing-library/jest-dom/extend-expect';
import App from '../../../App';

import { render, fireEvent, screen } from '../../../Store/Test/test-utils';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  const { container, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(container.innerHTML).toMatch('Weather App');

  fireEvent.click(getByText(/SEARCH/i));

  expect(container.innerHTML).toMatch('Forecast');
});
