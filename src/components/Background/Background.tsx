import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    container: {
      backgroundColor: palette.primary.main,
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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

const Background: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {children}

      <a
        className={classes.reference}
        href="https://darksky.net/poweredby/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by Dark Sky
      </a>
    </div>
  );
};

export default Background;
