import { GET_LOCATION, GetLocationTypes, Location } from '../Store/Types/types';

export const initialState = {
  latitude: '-80.89343',
  longitude: '40.89722',
  data: {
    timezone: '',
    summary: '',
    icon: '',
    precipProbability: 0,
    temperature: 0,
    windSpeed: 0,
    uvIndex: 0,
    hourly: [{ temperature: 0, date: 0 }],
    daily: [{ temperature: 0, date: 0 }],
  },
};
export const locationReducer = (
  state = initialState,
  action: GetLocationTypes
): Location => {
  switch (action.type) {
    case GET_LOCATION:
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default locationReducer;
