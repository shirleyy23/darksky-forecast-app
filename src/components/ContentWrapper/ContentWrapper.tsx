import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ExternalLink from '../ExternalLink/ExternalLink';

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles(({ spacing, palette }: Theme) =>
  createStyles({
    root: {
      padding: spacing(5),
      color: palette.secondary.main,
    },
    paragraph: {
      paddingTop: spacing(1),
    },
    '@media (max-width: 499px)': {
      paragraph: {
        paddingTop: spacing(4),
        textAlign: 'left',
      },
    },
  })
);

const ContentWrapper: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Box component="section" className={classes.root}>
      {children}
      <Typography
        component="p"
        variant="subtitle2"
        align="right"
        className={classes.paragraph}
      />
    </Box>
  );
};

export default ContentWrapper;
