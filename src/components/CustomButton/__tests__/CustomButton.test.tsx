import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CustomButton from '../CustomButton';

type CustomButtonProps = React.ComponentProps<typeof CustomButton>;

const renderCustomButton = (props: Partial<CustomButtonProps> = {}) => {
  const defaultProps: CustomButtonProps = {
    content: 'SEARCH',
    link: '/forecast',
    disabled: false,
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

  test('<CustomButton /> for forecast page renders correct background colour', () => {
    const { container } = renderCustomButton();
    expect(container.firstChild).toHaveClass('MuiButton-containedPrimary');
  });

  test('<CustomButton /> for home page renders correct background colour', () => {
    const link = '/';
    const { container } = renderCustomButton({ link });
    expect(container.firstChild).toHaveClass('MuiButton-containedSecondary');
  });

  test('<CustomButton /> with disabled prop prevents users from clicking button', () => {
    const disabled = true;
    const { container } = renderCustomButton({ disabled });
    expect(container.firstChild).toHaveClass('Mui-disabled');
  });
});
