import { FormattedDate } from './types';

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
