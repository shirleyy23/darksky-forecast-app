import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from '../../types';

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
      flexBasis: '33%',
      marginBottom: spacing(4),
    },
    icon: {
      color: palette.primary.main,
      marginBottom: spacing(4),
    },
    title: {
      color: palette.secondary.light,
      fontWeight: 600,
    },
    value: {
      marginBottom: spacing(2),
    },
    '@media (max-width: 680px)': {
      container: {
        flexBasis: '50%',
      },
    },
    '@media (max-width: 450px)': {
      container: {
        flexBasis: '100%',
      },
    },
  })
);

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
