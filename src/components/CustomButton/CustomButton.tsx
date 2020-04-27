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

const LinkBehavior = React.forwardRef<any, Omit<RouterLinkProps, 'to'>>(
  (props, ref) => (
    <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
  )
);

LinkBehavior.displayName = 'Link Behaviour';
