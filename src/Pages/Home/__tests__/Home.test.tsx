import React from 'react';
import { render, fireEvent } from '../../../Store/Test/test-utils';
import Home from '../Home';

describe('<Home />', () => {
  test('App title renders correctly', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Weather App')).toBeInTheDocument();
  });

  test('Valid inputs allow users to submit form', () => {
    const { getByTestId } = render(<Home />);
    const latitude = getByTestId('latitude');
    const longitude = getByTestId('longitude');
    fireEvent.change(latitude, { target: { value: 35.3134 } });
    fireEvent.change(longitude, { target: { value: 24.9048 } });
    expect(latitude).toHaveValue('35.3134');
    expect(longitude).toHaveValue('24.9048');
    const link = getByTestId('link');
    expect(link).toHaveAttribute('href', '/forecast/35.3134,24.9048');
    expect(link).not.toHaveClass('Mui-disabled Mui-disabled');
  });
});
