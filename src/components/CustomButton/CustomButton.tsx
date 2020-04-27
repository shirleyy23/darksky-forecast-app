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
}

const useStyles = makeStyles({
  button: {
    padding: '.75em 2.25em',
    borderRadius: '30px',
    fontWeight: 800,
  },
});

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
  (props, ref) => (
    <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
  )
);

LinkBehavior.displayName = 'Link Behaviour';

const CustomButton: React.FC<Props> = ({ content, link }) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color={link === '/' ? 'secondary' : 'primary'}
      component={RouterLink}
      className={classes.button}
      to={link}
    >
      {content}
    </Button>
  );
};
export default CustomButton;
