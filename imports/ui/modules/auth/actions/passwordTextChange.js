import { PASSWORD_TEXT_CHANGE } from './actionTypes';

const passwordTextChange = (text) => ({
  type: PASSWORD_TEXT_CHANGE,
  payload: text
});

export default passwordTextChange;