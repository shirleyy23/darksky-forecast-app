import React from 'react';
import { Grid, TextField, Typography } from '@material-ui/core';
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

class Form extends React.Component<Props, FormState> {
  constructor(props: Props) {
    super(props);
    this.handleError = this.handleError.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state: FormState = {
    latitude: false,
    longitude: false,
  };

  handleError(value: string, name: string): any {
    if (!value || !+value) {
      this.setState((state) => ({
        ...this.state,
        [name]: true,
      }));
      return false;
    }

    this.setState((state) => ({
      ...this.state,
      [name]: false,
    }));
    return true;
  }

  handleInput(e: React.ChangeEvent<HTMLInputElement>): void {
    const { value, name } = e.target;
    this.handleError(value, name);
    this.props.getLocationInfo({
      ...this.props,
      [name]: value,
    });
  }

  async handleSubmit(): Promise<any> {
    this.props.updateFormSubmit({ isSubmitted: !this.props.isSubmitted });
    this.props.getAPIState({ loading: true, success: false, fail: false });

    const submittedData = JSON.stringify({
      latitude: this.props.latitude,
      longitude: this.props.longitude,
    });

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
      this.props.getLocationInfo({
        ...this.props,
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
      this.props.getAPIState({ loading: false, success: true, fail: false });
    } catch (err) {
      this.props.getAPIState({ loading: false, success: false, fail: true });
      console.error(err);
    }
  }

  render(): React.ReactNode {
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
              error={this.state.latitude}
              fullWidth
              id="latitude"
              label="Latitude"
              value={this.props.latitude}
              placeholder="-80.89343"
              onChange={this.handleInput}
              name="latitude"
              inputProps={{
                'data-testid': 'latitude',
              }}
              helperText={this.state.latitude && 'Please enter a number'}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              error={this.state.longitude}
              fullWidth
              id="longitude"
              label="Longitude"
              value={this.props.longitude}
              placeholder="40.89722"
              name="longitude"
              onChange={this.handleInput}
              inputProps={{
                'data-testid': 'longitude',
              }}
              helperText={this.state.longitude && 'Please enter a number'}
            />
          </Grid>
          <Grid item xs={12}>
            <CustomButton
              link={`/forecast/${this.props.latitude},${this.props.longitude}`}
              content="SEARCH"
              disabled={this.state.latitude || this.state.longitude}
              onClick={this.handleSubmit}
            />
          </Grid>
        </Grid>
      </ContentWrapper>
    );
  }
}

export default connector(Form);
