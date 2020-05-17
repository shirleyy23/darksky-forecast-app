import React from 'react';
import { useStyles } from './Styles/Style';
import { Box, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { TitleProps } from '../../types';

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
