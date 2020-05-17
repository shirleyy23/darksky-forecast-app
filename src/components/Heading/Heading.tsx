import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { TitleProps } from '../../types';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      backgroundColor: palette.secondary.main,
      color: 'white',
      padding: spacing(5),
      letterSpacing: '-1px',
      marginBottom: 0,
    },
    heading: {
      fontWeight: 600,
      letterSpacing: '-1px',
    },
    icon: {
      display: 'inline-block',
      marginLeft: spacing(2),
    },
  })
);

const Heading: React.FC<TitleProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <Box mb={4} component="header" className={classes.root}>
      <Typography variant="h4" component="h1" className={classes.heading}>
        {title}
        <FontAwesomeIcon className={classes.icon} icon={faCloudSun} />
      </Typography>
    </Box>
  );
};

export default Heading;
