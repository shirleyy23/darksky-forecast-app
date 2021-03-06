import React from 'react';
import { render, fireEvent, waitFor } from '../../../Store/Test/test-utils';
import App from '../../../App';

test('<SecondaryInfo /> renders correctly', async () => {
  const { getByTestId, getByText, getAllByTestId } = render(<App />);
  const button = getByTestId('link');
  fireEvent.click(button);
  expect(getByText('Loading...')).toBeInTheDocument();
  await waitFor(() => getByText('Forecast'));
  const secondaryInfo = getByTestId('secondary-info');
  expect(secondaryInfo.children.length).toBe(3);
  expect(getAllByTestId('icon-value')[0].textContent).toBe('20.00%');
  expect(getAllByTestId('icon-value')[1].textContent).toBe('4.99 km/h');
});
