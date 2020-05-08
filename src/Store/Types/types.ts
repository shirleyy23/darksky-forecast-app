export interface Location {
  latitude: string;
  longitude: string;
  data: {
    timezone: string;
    summary: string;
    icon: string;
    precipProbability: number;
    temperature: number;
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

export interface APIState {
  loading: boolean;
  success: boolean;
  fail: boolean;
}

export const GET_APISTATE = 'GET API_STATE';

interface GetAPIState {
  type: typeof GET_APISTATE;
  payload: APIState;
}

export type GetAPIStateTypes = GetAPIState;

export type CombinedCustomTypes = Location & APIState;
