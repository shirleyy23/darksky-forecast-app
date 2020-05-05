import React from 'react';
import { render, fireEvent } from '../../../Store/Test/test-utils';
import { Route } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Form from '../Form';
import App from '../../../App';

test('can render with redux with defaults', () => {
  const { getByTestId } = render(<Form />);
  const latitude = getByTestId('latitude');
  const longitude = getByTestId('longitude');
  expect(latitude).toHaveValue('-80.89343');
  expect(longitude).toHaveValue('40.89722');
});
