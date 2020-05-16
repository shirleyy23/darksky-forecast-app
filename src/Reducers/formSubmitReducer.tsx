import {
  GET_FORM_SUBMIT,
  GetFormSubmitTypes,
  FormSubmit,
} from '../Store/Types/types';

export const initialState = {
  isSubmitted: false,
};
export const formSubmitReducer = (
  state = initialState,
  action: GetFormSubmitTypes
): FormSubmit => {
  switch (action.type) {
    case GET_FORM_SUBMIT:
      return {
        ...state,
        isSubmitted: action.payload.isSubmitted,
      };
    default:
      return state;
  }
};

export default formSubmitReducer;
