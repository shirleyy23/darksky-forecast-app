import React from 'react';
import { render, fireEvent } from '../../../Store/Test/test-utils';
import Home from '../Home';

describe('<Home />', () => {
  test('App title renders correctly', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Weather App')).toBeInTheDocument();
  });
});
