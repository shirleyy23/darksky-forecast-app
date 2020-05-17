import React from 'react';
import { render } from '@testing-library/react';
import ExternalLink from '../ExternalLink';

test('<ExternalLink /> renders correctly', () => {
  const defaultProp = {
    link: 'https://example.com',
    title: 'Example',
  };
  const { getByTestId } = render(<ExternalLink {...defaultProp} />);
  const externalLink = getByTestId('external-link');
  const { link, title } = defaultProp;
  expect(externalLink).toHaveAttribute('href', link);
  expect(externalLink.textContent).toBe(title);
});
