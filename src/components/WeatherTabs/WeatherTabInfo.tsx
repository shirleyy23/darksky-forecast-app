import React from 'react';
import { WeatherTabInfoProps } from '../../types';
import { Box, Typography } from '@material-ui/core';

const WeatherTabInfo: React.FC<WeatherTabInfoProps> = ({
  temperature,
  date,
}) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      className="weather-tab-info"
      p={5}
      mb={4}
      component="article"
    >
      <Typography color="secondary" className="date" component="p" />
      <Typography component="p" color="primary" className="temperature" />
    </Box>
  );
};

export default WeatherTabInfo;
