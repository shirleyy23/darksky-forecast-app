import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CombinedCustomTypes } from '../../Store/Types/types';
import { RootState } from '../../Reducers/rootReducer';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router';
import Forecast from '../../Pages/Forecast/Forecast';

const mapState = (state: RootState): CombinedCustomTypes => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  data: state.location.data,
  loading: state.apiState.loading,
  success: state.apiState.success,
  fail: state.apiState.fail,
  isSubmitted: state.formSubmit.isSubmitted,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;

const ForecastRoute: React.FC<Props> = ({ isSubmitted }) => {
  return (
    <Route exact path="/forecast/:id">
      {isSubmitted ? <Forecast /> : <Redirect to="/" />}
    </Route>
  );
};

export default withRouter(connector(ForecastRoute));
