import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import ContentWrapper from '../ContentWrapper';

type ContentWrapperProps = React.ComponentProps<typeof ContentWrapper>;

const renderContentWrapper = (
  props: Partial<ContentWrapperProps> = {}
): RenderResult => {
  const exampleComponent = (
    <article>
      <p>Example Component</p>
    </article>
  );
  const defaultProps: ContentWrapperProps = {
    children: exampleComponent,
  };
  return render(<ContentWrapper {...defaultProps} {...props} />);
};

test('<Background /> renders correctly', () => {
  const { getByTestId, getByText } = renderContentWrapper();
  expect(getByText('Example Component')).toBeInTheDocument();
  const externalLink = getByTestId('external-link');
  expect(externalLink.textContent).toBe('Powered by Dark Sky');
  expect(externalLink).toHaveAttribute(
    'href',
    'https://darksky.net/poweredby/'
  );
});
