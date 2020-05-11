import React from 'react';
import {
  render,
  fireEvent,
  screen,
  waitFor,
} from '../../../Store/Test/test-utils';
import '@testing-library/jest-dom/extend-expect';
import App from '../../../App';

describe('<PrimaryInfo>', () => {
  test('primary info', async () => {
    const { getByTestId, debug } = render(<App />);
    const button = getByTestId('link');
    fireEvent.click(button);
    await waitFor(() => screen.getByText('Forecast'));
    const temperature = getByTestId('temperature');
    const timezone = getByTestId('timezone');
    const summary = getByTestId('summary');
    debug();
    expect(temperature).toHaveTextContent('25.3');
    expect(timezone).toHaveTextContent('Americas (Toronto)');
    expect(summary).toHaveTextContent('Cloudy');
  });
});
