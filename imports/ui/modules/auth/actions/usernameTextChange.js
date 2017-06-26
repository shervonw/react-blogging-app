import { USERNAME_TEXT_CHANGE } from './actionTypes';

const usernameTextChange = (text) => ({
  type: USERNAME_TEXT_CHANGE,
  payload: text
});

export default usernameTextChange;