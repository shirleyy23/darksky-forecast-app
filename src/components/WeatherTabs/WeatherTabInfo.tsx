import React from 'react';
import { CombinedWeatherTabInfoProps, DateTypes } from '../../types';
import { Box, Typography } from '@material-ui/core';

const WeatherTabInfo: React.FC<CombinedWeatherTabInfoProps> = ({
  temperature,
  date,
  dateType,
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
      {date}
      <Typography component="p" color="primary" className="temperature">
        {temperature}
      </Typography>
    </Box>
  );
};

export default WeatherTabInfo;
