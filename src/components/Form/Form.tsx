import React, { useState } from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
import { useStyles } from './Styles/Styles';
import CustomButton from '../CustomButton/CustomButton';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import {
  Location,
  GetLocationTypes,
  CombinedCustomTypes,
  APIState,
  GetAPIStateTypes,
  FormSubmit,
  GetFormSubmitTypes,
} from '../../Store/Types/types';
import { FormState } from '../../types';
import updateLocation from '../../Actions/updateLocation';
import updateAPIState from '../../Actions/updateAPIState';
import updateFormSubmit from '../../Actions/updateFormSubmit';
import axios from 'axios';

const mapState = (state: RootState): CombinedCustomTypes => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  data: state.location.data,
  loading: state.apiState.loading,
  success: state.apiState.success,
  fail: state.apiState.fail,
  isSubmitted: state.formSubmit.isSubmitted,
});

const mapDispatch = (dispatch: any) => ({
  getAPIState: (apiState: APIState): GetAPIStateTypes =>
    dispatch(updateAPIState(apiState)),
  getLocationInfo: (locationData: Location): GetLocationTypes =>
    dispatch(updateLocation(locationData)),
  updateFormSubmit: (formSubmit: FormSubmit): GetFormSubmitTypes =>
    dispatch(updateFormSubmit(formSubmit)),
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const Form: React.FC<Props> = (Props) => {
  const {
    longitude,
    latitude,
    getLocationInfo,
    getAPIState,
    updateFormSubmit,
    isSubmitted,
    data,
  } = Props;

  const classes = useStyles();

  const [formError, setFormError] = useState({
    latitude: false,
    longitude: false,
  });

  const handleError = (value: string, name: string): boolean => {
    if (!value || !+value) {
      setFormError({
        ...formError,
        [name]: true,
      });
      return false;
    }
    setFormError({
      ...formError,
      [name]: false,
    });
    return true;
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = e.target;
    handleError(value, name);
    getLocationInfo({
      ...Props,
      [name]: value,
    });
  };

  const handleSubmit = async (): Promise<any> => {
    updateFormSubmit({ isSubmitted: !isSubmitted });
    getAPIState({ loading: true, success: false, fail: false });

    const submittedData = JSON.stringify({ latitude, longitude });

    const apiData = axios.post('/.netlify/functions/weather', submittedData);

    try {
      const response = await apiData;
      const { timezone } = response.data;
      const {
        summary,
        icon,
        precipProbability,
        temperature,
        windSpeed,
        uvIndex,
      } = response.data.data;
      getLocationInfo({
        ...Props,
        data: {
          timezone,
          summary,
          icon,
          precipProbability,
          temperature,
          windSpeed,
          uvIndex,
        },
      });
      getAPIState({ loading: false, success: true, fail: false });
    } catch (err) {
      getAPIState({ loading: false, success: false, fail: true });
      console.error(err);
    }
  };

  return (
    <ContentWrapper>
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
            error={formError.latitude}
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
            helperText={formError.latitude && 'Please enter a number'}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            error={formError.longitude}
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
            helperText={formError.longitude && 'Please enter a number'}
          />
        </Grid>
        <Grid item xs={12}>
          <CustomButton
            link={`/forecast/${latitude},${longitude}`}
            content="SEARCH"
            disabled={formError.latitude || formError.longitude}
            onClick={handleSubmit}
          />
        </Grid>
      </Grid>
    </ContentWrapper>
  );
};

export default connector(Form);
