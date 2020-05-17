import React from 'react';
import { render } from '@testing-library/react';
import Background from '../Background';

type BackgroundProps = React.ComponentProps<typeof Background>;

const renderBackground = (props: Partial<BackgroundProps> = {}) => {
  const exampleComponent = (
    <div>
      <p>Example Component</p>
    </div>
  );
  const defaultProps: BackgroundProps = {
    children: exampleComponent,
  };
  return render(<Background {...defaultProps} {...props} />);
};
