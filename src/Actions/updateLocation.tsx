import { Location, GET_LOCATION, GetLocationTypes } from '../Store/Types/types';

const updateLocation = (updatedLocation: Location): GetLocationTypes => {
  return {
    type: GET_LOCATION,
    payload: updatedLocation,
  };
};

export default updateLocation;
