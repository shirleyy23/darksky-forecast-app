export interface Location {
  latitude: number;
  longitude: number;
  data: {
    timezone: string;
    summary: string;
    icon: string;
    precipProbability: number;
    tempearture: number;
    windSpeed: number;
    uvIndex: number;
  };
}

export const GET_LOCATION = 'GET LOCATION';

interface GetLocation {
  type: typeof GET_LOCATION;
  payload: Location;
}

export type GetLocationTypes = GetLocation;
