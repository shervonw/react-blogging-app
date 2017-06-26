import { TITLE_TEXT_CHANGE } from './actionTypes';

const titleTextChange = (text) => ({
  type: TITLE_TEXT_CHANGE,
  payload: text
});

export default titleTextChange;