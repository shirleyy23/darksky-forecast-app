import React from 'react';
import { render, fireEvent, waitFor, screen } from './Store/Test/test-utils';
import '@testing-library/jest-dom/extend-expect';
import { Route } from 'react-router-dom';
import App from './App';
import axios from 'axios';
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('<App />', () => {
  test('home page is rendered correctly', () => {
    const { getByText } = render(
      <Route exact path="/">
        <App />
      </Route>
    );
    expect(getByText('Weather App')).toBeInTheDocument();
  });

  test('forecast page is rendered correctly', async () => {
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
    expect(getByText('Loading...')).toBeInTheDocument();
    await waitFor(() => screen.getByText('Forecast'));
    expect(getByText('Forecast')).toBeInTheDocument();
  });

  test('Error message renders correctly', async () => {
    mockedAxios.post.mockRejectedValue(new Error('Error!'));
    const { getByText, getByTestId } = render(
      <Route exact path="/">
        <App />
      </Route>
    );
    const button = getByTestId('link');
    fireEvent.click(button);
    await waitFor(() => getByText('Error'));
    expect(
      getByText('An error has occurred, and the data cannot be retrieved.')
    ).toBeInTheDocument();
  });
});
