import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import App from '../../../App';

import { render, fireEvent } from '../../../Store/Test/test-utils';

test('full app rendering/navigating', () => {
  const { getByText } = render(<App />);

  expect(getByText('Weather App')).toBeInTheDocument();

  fireEvent.click(getByText(/SEARCH/i));

  expect(getByText('Forecast')).toBeInTheDocument();
});
