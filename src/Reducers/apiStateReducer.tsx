import { GET_APISTATE, GetAPIStateTypes, APIState } from '../Store/Types/types';

export const initialState = {
  loading: false,
  success: false,
  fail: false,
};

export const apiStateReducer = (
  state = initialState,
  action: GetAPIStateTypes
): APIState => {
  switch (action.type) {
    case GET_APISTATE:
      return {
        ...state,
        loading: action.payload.loading,
        success: action.payload.success,
        fail: action.payload.fail,
      };
    default:
      return state;
  }
};

export default apiStateReducer;
