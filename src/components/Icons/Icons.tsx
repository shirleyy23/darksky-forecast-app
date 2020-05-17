import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useStyles } from './Styles/Styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from '../../types';

const Icons: React.FC<IconProps> = ({ title, icon, value }) => {
  const classes = useStyles();
  return (
    <Box component="article" className={classes.container}>
      <FontAwesomeIcon
        size="4x"
        data-testid="icon-type"
        className={classes.icon}
        icon={icon}
      />
      <Typography
        component="h4"
        variant="h4"
        color="secondary"
        className={classes.value}
        data-testid="icon-value"
      >
        {value}
      </Typography>
      <Typography
        data-testid="icon-title"
        component="h5"
        variant="subtitle1"
        className={classes.title}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Icons;
