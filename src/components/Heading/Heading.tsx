import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';

interface Props {
  title: string;
}

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    heading: {
      backgroundColor: palette.secondary.main,
      color: 'white',
      padding: spacing(4),
      fontWeight: 800,
      letterSpacing: '-1px',
    },
  })
);

const Heading: React.FC<Props> = ({ title }) => {
  const classes = useStyles();
  return (
    <Box mb={4}>
      <Typography variant="h4" component="h1" className={classes.heading}>
        {title}
      </Typography>
    </Box>
  );
};

export default Heading;
