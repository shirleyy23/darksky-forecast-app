// Convert to percentage

export const convertToPercentage = (value: number): string => {
  const formattedValue = `${value * 100}%`;
  return formattedValue;
};
