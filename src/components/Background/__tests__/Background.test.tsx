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

test('<Background /> renders correctly', () => {
  const { getByTestId, getByText } = renderBackground();
  const background = getByTestId('background');
  expect(background).toBeInTheDocument();
  expect(getByText('Example Component')).toBeInTheDocument();
});
