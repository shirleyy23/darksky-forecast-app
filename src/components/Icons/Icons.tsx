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

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    container: {
      textAlign: 'center',
      flexBasis: '33%',
      marginBottom: spacing(4),
    },
    icon: {
      color: palette.primary.main,
      marginBottom: spacing(2),
    },
    title: {
      color: palette.secondary.light,
      fontWeight: 600,
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

const Icons: React.FC<Props> = ({ title, icon, value }) => {
  const classes = useStyles();
  return (
    <Box component="article" className={classes.container}>
      <FontAwesomeIcon size="3x" className={classes.icon} icon={icon} />
      <Typography component="h4" variant="h4" color="secondary">
        {value}
      </Typography>
      <Typography component="h5" variant="subtitle1" className={classes.title}>
        {title}
      </Typography>
    </Box>
  );
};

export default Icons;
