/* eslint-disable no-console */
import React from 'react';
import { render } from '@testing-library/react';
import Heading from '../Heading';

test('<Heading /> with title', () => {
  const { container } = render(<Heading title="Weather App" />);
  expect(container.firstChild).toMatchSnapshot();
});
