import React from 'react';
import { render, fireEvent, waitFor, screen } from './Store/Test/test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import axios from 'axios';
const mockedAxios = axios as jest.Mocked<typeof axios>;

afterEach(() => {
  jest.clearAllMocks();
});

describe('<App />', () => {
  test('home page is rendered correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Weather App')).toBeInTheDocument();
  });

  test('forecast page is rendered correctly', async () => {
    const { getByText, getByTestId } = render(<App />, {
      route: '/forecast/89084095,8490583940',
    });
    const button = getByTestId('link');
    fireEvent.click(button);
    expect(getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => screen.getByText('Forecast'));
    expect(getByText('Forecast')).toBeInTheDocument();
  });

  test('Error message renders correctly', async () => {
    mockedAxios.post.mockImplementation(() =>
      Promise.reject({ payload: 'rejected' })
    );
    const { getByText, getByTestId } = render(<App />);
    const button = getByTestId('link');
    fireEvent.click(button);
    await waitFor(() => getByText('Error'));
    expect(
      getByText('An error has occurred, and the data cannot be retrieved.')
    ).toBeInTheDocument();
  });
});
