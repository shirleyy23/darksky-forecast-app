import React from 'react';

import { render, fireEvent } from './Store/Test/test-utils';

import '@testing-library/jest-dom/extend-expect';

import { Route } from 'react-router-dom';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
});
