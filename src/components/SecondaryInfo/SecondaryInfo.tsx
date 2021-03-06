import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../Reducers/rootReducer';
import { Location } from '../../Store/Types/types';
import { Box } from '@material-ui/core';
import Icons from '../Icons/Icons';
import { faCloudRain, faSun, faWind } from '@fortawesome/free-solid-svg-icons';
import { convertToPercentage, convertWithUnit } from '../../Utilities';

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

  const formattedPrecipProbability = convertToPercentage(precipProbability);

  const formattedWindSpeed = convertWithUnit(windSpeed, 'km/h');

  return (
    <Box
      flexWrap="wrap"
      display="flex"
      component="section"
      data-testid="secondary-info"
      mb={5}
    >
      <Icons
        title="Probability of Precipitation"
        icon={faCloudRain}
        value={formattedPrecipProbability}
      />
      <Icons title="Wind Speed" icon={faWind} value={formattedWindSpeed} />
      <Icons title="UV Index" icon={faSun} value={uvIndex} />
    </Box>
  );
};

export default connector(SecondaryInfo);
