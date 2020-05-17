import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { ChildrenProps } from '../../types';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    container: {
      backgroundColor: palette.primary.main,
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    },
    '@media (max-width: 680px)': {
      container: {
        minHeight: '100vh',
        height: 'auto',
        padding: spacing(4),
      },
    },
  })
);

const Background: React.FC<ChildrenProps> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default Background;
