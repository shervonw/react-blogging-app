import { EMAIL_TEXT_CHANGE } from './actionTypes';

const emailTextChange = (text) => ({
  type: EMAIL_TEXT_CHANGE,
  payload: text
});

export default emailTextChange;