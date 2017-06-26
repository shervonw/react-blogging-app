import { Meteor } from 'meteor/meteor';
import {
  LOGGING_IN_USER,
  LOGGING_IN_FALIED,
  LOGGING_IN_SUCCESSFUL
} from './actionTypes';

const loginUser = ({email, password}, callback) => { 
  return dispatch =>   
    Meteor.loginWithPassword(email, password, (error) => {
      dispatch({ type: LOGGING_IN_USER });
      if(error) {
        dispatch({ type: LOGGING_IN_FALIED });
        throw new Meteor.Error("0", err);
      } else {
        dispatch({ 
          type: LOGGING_IN_SUCCESSFUL, 
          payload: Accounts.user()
        });
        callback();
      }
    })
}

export default loginUser;