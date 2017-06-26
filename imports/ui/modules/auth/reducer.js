import {
  GET_CURRENT_USER,
  LOGGING_IN_SUCCESSFUL,
  USERNAME_TEXT_CHANGE,
  EMAIL_TEXT_CHANGE, 
  PASSWORD_TEXT_CHANGE 
} from './actions/actionTypes';

const initialState = {
  username: '',
  email: '',
  password: '',
  user: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_USER:
      return Object.assign({}, state, { user : action.payload});
    case LOGGING_IN_SUCCESSFUL:
      return Object.assign({}, state, { user : action.payload});
    case USERNAME_TEXT_CHANGE:
      return Object.assign({}, state, { username : action.payload});
    case EMAIL_TEXT_CHANGE:
      return Object.assign({}, state, { email : action.payload});
    case PASSWORD_TEXT_CHANGE:
      return Object.assign({}, state, { password : action.payload});
    default:
      return state;
  }
}