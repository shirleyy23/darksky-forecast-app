import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
  title: string;
  value: string;
  icon: IconProp;
}

const Icons: React.FC<Props> = ({ title, icon, value }) => {
  const classes = useStyles();
  return (
    <Box component="article" className={classes.container}>
      <FontAwesomeIcon size="3x" className={classes.icon} icon={icon} />
      <Typography component="h4" variant="h4" color="secondary">
        {value}
      </Typography>
      <Typography component="h5" variant="subtitle1">
        {title}
      </Typography>
    </Box>
  );
};

export default Icons;
