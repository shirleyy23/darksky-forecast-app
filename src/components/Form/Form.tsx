import React from 'react';
import { Box, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CustomButton from '../CustomButton/CustomButton';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import {
  GET_LOCATION,
  Location,
  GetLocationTypes,
} from '../../Store/Types/types';
import updateLocation from '../../Actions/updateLocation';

const mapState = (state: RootState): Location => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  data: state.location.data,
});

const mapDispatch = {
  updateLocation: (locationData: Location): GetLocationTypes => ({
    type: GET_LOCATION,
    payload: locationData,
  }),
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const useStyles = makeStyles(({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      color: palette.secondary.main,
      padding: spacing(5),
    },
    input: {
      width: '100%',
    },
  })
);

const Form: React.FC<Props> = ({
  latitude,
  longitude,
  data,
  updateLocation,
}) => {
  const classes = useStyles();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    name === 'latitude'
      ? updateLocation({ latitude: value, longitude, data })
      : updateLocation({ latitude, longitude: value, data });
  };

  return (
    <Box className={classes.root} component="section">
      <Grid container spacing={5} component="form">
        <Grid item xs={12}>
          <Typography variant="subtitle1" component="p">
            Enter the <strong>latitude</strong> and <strong>longitude</strong>
            &nbsp;values of the location you would like to get weather
            information for.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.input}
            id="latitude"
            label="Latitude"
            value={latitude}
            placeholder="-80.89343"
            onChange={handleInput}
            name="latitude"
            inputProps={{
              'data-testid': 'latitude',
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            className={classes.input}
            id="longitude"
            label="Longitude"
            value={longitude}
            placeholder="40.89722"
            name="longitude"
            onChange={handleInput}
            inputProps={{
              'data-testid': 'longitude',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton link="/forecast" content="SEARCH" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default connector(Form);
