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

test('Can change input values', () => {
  const { getByTestId } = render(<Form />);
  const latitude = getByTestId('latitude');
  const longitude = getByTestId('longitude');
  fireEvent.change(latitude, { target: { value: 35.3134 } });
  fireEvent.change(longitude, { target: { value: 24.9048 } });
  expect(latitude).toHaveValue('35.3134');
  expect(longitude).toHaveValue('24.9048');
});

test('Error message is shown with an incorrect latitude value', () => {
  const { getByTestId, container } = render(<Form />);
  const latitude = getByTestId('latitude');
  fireEvent.change(latitude, { target: { value: '40.39s' } });
  expect(latitude).toHaveValue('40.39s');
  const helperText = container.querySelector('#latitude-helper-text');
  expect(helperText).toBeTruthy();
  expect(helperText).toHaveTextContent('Please enter a number');
});

test('Error message is shown with an incorrect longitude value', () => {
  const { getByTestId, container } = render(<Form />);
  const longitude = getByTestId('longitude');
  fireEvent.change(longitude, { target: { value: '20..4' } });
  expect(longitude).toHaveValue('20..4');
  const helperText = container.querySelector('#longitude-helper-text');
  expect(helperText).toBeTruthy();
  expect(helperText).toHaveTextContent('Please enter a number');
});
