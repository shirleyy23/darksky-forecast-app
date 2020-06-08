import { FormattedDate, WeatherTabInfoProps } from './types';

// Convert to percentage

export const convertToPercentage = (value: number): string => {
  const formattedValue = `${(value * 100).toFixed(2)}%`;
  return formattedValue;
};

//Convert numbers to string with units

export const convertWithUnit = (value: number, unit: string): string => {
  const formattedValue = `${value} ${unit}`;
  return formattedValue;
};

//Date arrays

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Returns formatted date

export const formattedDate = (value: number): FormattedDate => {
  const time = new Date(value * 1000);
  return {
    hour: `${time.getHours()}:00`,
    day: days[time.getDay()],
    date: time.getDate(),
    month: months[time.getMonth()],
    year: time.getFullYear(),
  };
};

// Return a subset of weather data as a new array from the original

export const selectWeatherData = (
  min: number,
  max: number,
  arr: []
): WeatherTabInfoProps[] => {
  const newWeatherArray = arr.splice(min, max);
  const formattedWeatherArray = newWeatherArray.map((data) => {
    const { time } = data;
    const temperature = data['apparentTemperatureHigh']
      ? data['apparentTemperatureHigh']
      : data['temperature'];
    return {
      temperature,
      date: time,
    };
  });
  return formattedWeatherArray;
};
