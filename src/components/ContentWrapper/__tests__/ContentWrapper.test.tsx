import React from 'react';
import { render } from '@testing-library/react';
import ContentWrapper from '../ContentWrapper';

type ContentWrapperProps = React.ComponentProps<typeof ContentWrapper>;

const renderContentWrapper = (props: Partial<ContentWrapperProps> = {}) => {
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
