import React from 'react';
import Background from '../../components/Background/Background';
import { Grid, Paper } from '@material-ui/core';
import { useStyles } from './Styles/Style';
import Heading from '../../components/Heading/Heading';
import PrimaryInfo from '../../components/PrimaryInfo/PrimaryInfo';
import SecondaryInfo from '../../components/SecondaryInfo/SecondaryInfo';
import CustomButton from '../../components/CustomButton/CustomButton';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import {
  CombinedCustomTypes,
  FormSubmit,
  GetFormSubmitTypes,
} from '../../Store/Types/types';
import updateFormSubmit from '../../Actions/updateFormSubmit';

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
  updateFormSubmit: (formSubmit: FormSubmit): GetFormSubmitTypes =>
    dispatch(updateFormSubmit(formSubmit)),
});

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const Forecast: React.FC<Props> = ({
  loading,
  success,
  updateFormSubmit,
  isSubmitted,
  fail,
}) => {
  const classes = useStyles();

  const resetFormSubmit = () => {
    updateFormSubmit({ isSubmitted: !isSubmitted });
  };

  return (
    <Background>
      <Grid container spacing={3} className={classes.root}>
        <Grid item xs={12}>
          <Paper>
            {(() => {
              if (loading) {
                return (
                  <React.Fragment>
                    <Heading title="Loading..." />
                    <ContentWrapper>
                      <p>Please wait as weather data loads</p>
                    </ContentWrapper>
                  </React.Fragment>
                );
              } else if (success) {
                return (
                  <React.Fragment>
                    <Heading title="Forecast" />
                    <ContentWrapper>
                      <PrimaryInfo />
                      <SecondaryInfo />
                      <CustomButton
                        onClick={resetFormSubmit}
                        link="/"
                        content="Back"
                      />
                    </ContentWrapper>
                  </React.Fragment>
                );
              } else {
                return (
                  <React.Fragment>
                    <Heading title="Error" />
                    <ContentWrapper>
                      <p>An error has occurred. Please try again.</p>
                      <CustomButton
                        onClick={resetFormSubmit}
                        link="/"
                        content="Back"
                      />
                    </ContentWrapper>
                  </React.Fragment>
                );
              }
            })()}
          </Paper>
        </Grid>
      </Grid>
    </Background>
  );
};

export default connector(Forecast);
