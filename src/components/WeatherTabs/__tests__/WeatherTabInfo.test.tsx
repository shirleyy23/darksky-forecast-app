import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import WeatherTabInfo from '../WeatherTabInfo';
import { DateTypes } from '../../../types';

type WeatherTabInfoProps = React.ComponentProps<typeof WeatherTabInfo>;

const renderWeatherTabInfo = (
  props: Partial<WeatherTabInfoProps> = {}
): RenderResult => {
  const defaultProps: WeatherTabInfoProps = {
    temperature: 30.25,
    date: 1509991200,
    dateType: DateTypes.hourly,
  };
  return render(<WeatherTabInfo key="1" {...defaultProps} {...props} />);
};
