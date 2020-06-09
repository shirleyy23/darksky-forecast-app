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

describe('<WeatherTabInfo /> renders correctly', () => {
  test('Hourly data renders correctly', () => {
    const { getByTestId } = renderWeatherTabInfo();
    const date = getByTestId('date-tab-info');
    const temperature = getByTestId('date-tab-temperature');
    const icon = getByTestId('icon-tab-info');
    expect(date).toHaveTextContent('13:00');
    expect(temperature).toHaveTextContent('30.25');
    expect(icon).toHaveClass('svg-inline--fa fa-clock');
  });
});
