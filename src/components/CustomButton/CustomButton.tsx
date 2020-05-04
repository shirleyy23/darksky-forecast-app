import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Omit } from '@material-ui/types';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  link: string;
  content: string;
  disabled?: boolean;
}

const useStyles = makeStyles({
  button: {
    padding: '.75em 2.25em',
    borderRadius: '30px',
    fontWeight: 800,
  },
});

const CustomButton: React.FC<Props> = ({ content, link, disabled }) => {
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
    >
      {content}
    </Button>
  );
};
export default CustomButton;
