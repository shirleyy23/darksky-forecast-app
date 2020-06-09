import React from 'react';
import { render, fireEvent, waitFor } from '../../../Store/Test/test-utils';
import App from '../../../App';

describe('<WeatherTabs />', () => {
  test('Hourly tab loads correct data', async () => {
    const { getByTestId, getByText, queryByTestId } = render(<App />);
    const button = getByTestId('link');
    fireEvent.click(button);
    await waitFor(() => getByText('Forecast'));
    const hourlyTabsContainer = getByTestId('tabs-container-0');
    expect(hourlyTabsContainer.children.length).toBe(13);
    const hourlyTabDescription = getByTestId('hourly-tab-description');
    const dailyTabDescription = queryByTestId('daily-tab-description');
    expect(hourlyTabDescription).toHaveTextContent(
      'Hourly forecast is available, and based on a 24 hour clock.'
    );
    expect(dailyTabDescription).toBeNull();
  });
  test('Switch to daily tab with correct data rendered', async () => {
    const { getByTestId, getByText, queryByTestId } = render(<App />);
    const button = getByTestId('link');
    fireEvent.click(button);
    await waitFor(() => getByText('Forecast'));
    const dailyButton = getByTestId('daily-tab-label');
    fireEvent.click(dailyButton);
    const dailyTabsContainer = getByTestId('tabs-container-1');
    const hourlyTabDescription = queryByTestId('hourly-tab-description');
    const dailyTabDescription = getByTestId('daily-tab-description');
    expect(dailyTabsContainer.children.length).toBe(8);
    expect(dailyTabDescription).toHaveTextContent(
      'Daily forecast is available for the following week'
    );
    expect(hourlyTabDescription).toBeNull();
  });
});
