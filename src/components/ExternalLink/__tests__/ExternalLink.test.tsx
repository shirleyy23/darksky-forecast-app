import React from 'react';
import { render } from '@testing-library/react';
import ExternalLink from '../ExternalLink';

test('<ExternalLink /> renders correctly', () => {
  const defaultProp = {
    link: 'https://example.com',
    content: 'Example',
  };
  const { getByTestId } = render(<ExternalLink {...defaultProp} />);
  const externalLink = getByTestId('external-link');
  const { link, content } = defaultProp;
  expect(externalLink).toHaveAttribute('href', link);
  expect(externalLink.textContent).toBe(content);
});
