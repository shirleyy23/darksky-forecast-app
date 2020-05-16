import {
  FormSubmit,
  GET_FORM_SUBMIT,
  GetFormSubmitTypes,
} from '../Store/Types/types';

const updateFormSubmit = (
  updatedFormSubmit: FormSubmit
): GetFormSubmitTypes => {
  return {
    type: GET_FORM_SUBMIT,
    payload: updatedFormSubmit,
  };
};

export default updateFormSubmit;
