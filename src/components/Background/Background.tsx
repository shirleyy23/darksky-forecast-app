import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    background: {
      backgroundColor: palette.primary.main,
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

const Background: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.background}>{children}</div>;
};

export default Background;
