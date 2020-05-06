import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import { Location } from '../../Store/Types/types';
import { Box, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    degrees: {
      fontSize: '.5em',
    },
    container: {
      justifyContent: 'space-between',
    },
    '@media (max-width: 675px)': {
      container: {
        justifyContent: 'flex-start',
      },
    },
  })
);

const mapState = (state: RootState): Location => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  data: state.location.data,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const PrimaryInfo: React.FC<Props> = ({ latitude, longitude, ...Props }) => {
  const { temperature, summary, timezone } = Props.data;

  const classes = useStyles();

  return (
    <Box
      flexWrap="wrap"
      display="flex"
      mb={1}
      component="section"
      className={classes.container}
    >
      <Box>
        <Typography variant="h2" component="h2">
          {temperature}
          <sup className={classes.degrees}>&#8451;</sup>
        </Typography>
      </Box>
      <Box>
        <Typography component="h3" variant="h5">
          {timezone}
        </Typography>
        <Typography component="h3" variant="subtitle1">
          Located at: {latitude}, {longitude}
        </Typography>
        <Typography component="h3" variant="subtitle1">
          <em> {summary}</em>
        </Typography>
      </Box>
    </Box>
  );
};

export default connector(PrimaryInfo);
