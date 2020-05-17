import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { useStyles } from './Styles/Style';
import { ButtonProps } from '../../types';

const CustomButton: React.FC<ButtonProps> = ({
  content,
  link,
  disabled,
  onClick,
}) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color={link === '/' ? 'secondary' : 'primary'}
      component={RouterLink}
      className={classes.button}
      to={link}
      data-testid="link"
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </Button>
  );
};
export default CustomButton;
