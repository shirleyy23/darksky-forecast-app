import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../Reducers/rootReducer';
import { Location } from '../../Store/Types/types';

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
};

export default connector(PrimaryInfo);
