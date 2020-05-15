import {
  APIState,
  GET_API_STATE,
  GetAPIStateTypes,
} from '../Store/Types/types';

const updateAPIState = (updatedAPIState: APIState): GetAPIStateTypes => {
  return {
    type: GET_API_STATE,
    payload: updatedAPIState,
  };
};

export default updateAPIState;
