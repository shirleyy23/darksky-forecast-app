import { WeatherTabInfoProps } from '../../types';
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
    hourly: WeatherTabInfoProps[];
    daily: WeatherTabInfoProps[];
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

export const GET_API_STATE = 'GET API STATE';

interface GetAPIState {
  type: typeof GET_API_STATE;
  payload: APIState;
}

export type GetAPIStateTypes = GetAPIState;

export interface FormSubmit {
  isSubmitted: boolean;
}

export const GET_FORM_SUBMIT = 'GET FORM SUBMIT';

interface GetFormSubmitState {
  type: typeof GET_FORM_SUBMIT;
  payload: FormSubmit;
}

export type GetFormSubmitTypes = GetFormSubmitState;

export type CombinedCustomTypes = Location & APIState & FormSubmit;
