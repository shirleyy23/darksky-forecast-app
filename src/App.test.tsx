import React from 'react';

import { render, fireEvent } from './Store/Test/test-utils';

import '@testing-library/jest-dom/extend-expect';

import { Route } from 'react-router-dom';
import App from './App';

describe('<App />', () => {
  test('home page is rendered correctly', () => {
    const { getByText } = render(<App />);
    expect(getByText('Weather App')).toBeInTheDocument();
  });
});
