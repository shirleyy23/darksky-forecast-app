import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { CombinedCustomTypes } from '../../Store/Types/types';
import { RootState } from '../../Reducers/rootReducer';
import { connect, ConnectedProps } from 'react-redux';
import { withRouter } from 'react-router';
import Forecast from '../../Pages/Forecast/Forecast';
