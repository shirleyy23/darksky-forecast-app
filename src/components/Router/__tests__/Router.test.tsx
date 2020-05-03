import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import '@testing-library/jest-dom/extend-expect';
import App from '../../../App';

import { render, fireEvent, screen } from '../../../Store/Test/test-utils';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  const { getByText } = render(<App />);

  expect(getByText('Weather App')).toBeInTheDocument();

  fireEvent.click(getByText(/SEARCH/i));

  expect(getByText('Forecast')).toBeInTheDocument();
});
