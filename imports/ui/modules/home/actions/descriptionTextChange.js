import { DESCRIPTION_TEXT_CHANGE } from './actionTypes';

const descriptionTextChange = (text) => ({
  type: DESCRIPTION_TEXT_CHANGE,
  payload: text
});

export default descriptionTextChange;