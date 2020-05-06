import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import { Location } from '../../Store/Types/types';
import { Box } from '@material-ui/core';
import Icons from '../Icons/Icons';
import { faCloudRain, faSun, faWind } from '@fortawesome/free-solid-svg-icons';

const mapState = (state: RootState): Location => ({
  latitude: state.location.latitude,
  longitude: state.location.longitude,
  data: state.location.data,
});

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux;
const SecondaryInfo: React.FC<Props> = ({ data }: Props) => {
  const { uvIndex, windSpeed, precipProbability } = data;
  return <Box flexWrap="wrap" display="flex" mb={1} component="section" />;
};

export default connector(SecondaryInfo);
