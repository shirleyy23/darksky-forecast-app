// Convert to percentage

export const convertToPercentage = (value: number): string => {
  const formattedValue = `${value * 100}%`;
  return formattedValue;
};

//Convert numbers to string with units

export const convertWithUnit = (value: number, unit: string): string => {
  const formattedValue = `${value} ${unit}`;
  return formattedValue;
};
