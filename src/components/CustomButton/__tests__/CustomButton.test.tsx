import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CustomButton from '../CustomButton';

type CustomButtonProps = React.ComponentProps<typeof CustomButton>;

const renderCustomButton = (props: Partial<CustomButtonProps> = {}) => {
  const defaultProps: CustomButtonProps = {
    content: 'SEARCH',
    link: '/forecast',
  };
  return render(
    <BrowserRouter>
      <CustomButton {...defaultProps} {...props} />
    </BrowserRouter>
  );
};

describe('<CustomButton />', () => {
  test('<CustomButton /> renders with title and link', () => {
    const { container } = renderCustomButton();
    expect(container.firstChild).toMatchSnapshot();
  });
});
