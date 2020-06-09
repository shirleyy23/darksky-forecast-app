import React from 'react';
import { CombinedWeatherTabInfoProps, DateTypes } from '../../types';
import { Box, Typography } from '@material-ui/core';
import { formattedDate } from '../../Utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faCalendar } from '@fortawesome/free-solid-svg-icons';

const WeatherTabInfo: React.FC<CombinedWeatherTabInfoProps> = ({
  temperature,
  date,
  dateType,
}) => {
  const displayDate = (value: number): string => {
    const newDate = formattedDate(value);
    const { day, date, month, year, hour } = newDate;
    if (dateType === DateTypes.hourly) return hour;
    const fullDate = `${day}, ${month} ${date} ${year}`;
    return fullDate;
  };

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="space-between"
      className="weather-tab-info"
      p={5}
      component="article"
    >
      <Typography
        color="secondary"
        className="date"
        component="p"
        data-testid="date-tab-info"
      >
        <FontAwesomeIcon
          data-testid="icon-tab-info"
          icon={dateType === DateTypes.hourly ? faClock : faCalendar}
        />
        &nbsp;
        {displayDate(date)}
      </Typography>
      <Typography
        component="p"
        color="primary"
        className="temperature"
        data-testid="date-tab-temperature"
      >
        {temperature}
        <sup>&#8451;</sup>
      </Typography>
    </Box>
  );
};

export default WeatherTabInfo;
