import { APIState, GET_APISTATE, GetAPIStateTypes } from '../Store/Types/types';

const updateAPIState = (updatedAPIState: APIState): GetAPIStateTypes => {
  return {
    type: GET_APISTATE,
    payload: updatedAPIState,
  };
};

export default updateAPIState;
