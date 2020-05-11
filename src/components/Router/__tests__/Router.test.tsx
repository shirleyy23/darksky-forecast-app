import React from 'react';

import '@testing-library/jest-dom/extend-expect';
import App from '../../../App';

import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '../../../Store/Test/test-utils';

import axios from 'axios';

const mockedAxios = axios as jest.Mocked<typeof axios>;

test('full app rendering/navigating', async () => {
  const { getByText, debug } = render(<App />);

  expect(getByText('Weather App')).toBeInTheDocument();

  fireEvent.click(getByText(/SEARCH/i));

  expect(getByText('Loading...')).toBeInTheDocument();

  await waitFor(() => screen.getByText('Forecast'));

  expect(mockedAxios.post).toHaveBeenCalledTimes(1);
});
