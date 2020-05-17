import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './Styles/Style';
import ExternalLink from '../ExternalLink/ExternalLink';
import { ChildrenProps } from '../../types';

const ContentWrapper: React.FC<ChildrenProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <Box
      component="section"
      data-testid="content-wrapper"
      className={classes.root}
    >
      {children}
      <Typography
        component="p"
        variant="subtitle2"
        align="right"
        className={classes.paragraph}
      >
        <ExternalLink
          link="https://darksky.net/poweredby/"
          content="Powered by Dark Sky"
        />
      </Typography>
    </Box>
  );
};

export default ContentWrapper;
