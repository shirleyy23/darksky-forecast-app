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
});
