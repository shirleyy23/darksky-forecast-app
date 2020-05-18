import React from 'react';
import {
  render,
  fireEvent,
  waitFor,
  screen,
} from '../../../Store/Test/test-utils';
import App from '../../../App';
import axios from 'axios';
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  jest.clearAllMocks();
});

describe('<Forecast /> UI renders correctly based on API state', () => {
  test('Loading UI renders correctly', () => {
    const { getByTestId, getByText } = render(<App />);
    const button = getByTestId('link');
    fireEvent.click(button);
    expect(getByText('Loading...')).toBeInTheDocument();
    expect(getByText('Please wait as weather data loads')).toBeInTheDocument();
  });
  test('Forecast UI renders with API data', async () => {
    const { getByTestId, getByText } = render(<App />);
    const button = getByTestId('link');
    fireEvent.click(button);
    expect(getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => getByText('Forecast'));
    const temperature = getByTestId('temperature');
    expect(temperature.textContent).toBe('25.3℃');
  });
  test('Error UI renders correctly when API call is rejected', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Error'));
    const { getByTestId, getByText } = render(<App />);
    const button = getByTestId('link');
    fireEvent.click(button);
    expect(getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => getByText('Error'));
    expect(
      getByText('An error has occurred, and the data cannot be retrieved.')
    ).toBeInTheDocument();
  });
});
