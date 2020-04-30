import { GET_LOCATION, GetLocationTypes, Location } from '../Store/Types/types';

export const initialState = {
  latitude: '-80.89343',
  longitude: '40.89722',
  data: {
    timezone: '',
    summary: '',
    icon: '',
    precipProbability: 0,
    tempearture: 0,
    windSpeed: 0,
    uvIndex: 0,
  },
};
const locationReducer = (
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
