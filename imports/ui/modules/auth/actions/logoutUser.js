import { Meteor } from 'meteor/meteor';
import {
  LOGGING_OUT_USER,
  LOGGING_OUT_FALIED,
  LOGGING_OUT_SUCCESSFUL
} from './actionTypes';

const logoutUser = (callback) => { 
  return dispatch =>   
    Meteor.logout((error) => {
      dispatch({ type: LOGGING_OUT_USER });
      
      if(error) {
        dispatch({ type: LOGGING_OUT_FALIED });
        throw new Meteor.Error("0", err);
      } else {

        dispatch({ 
          type: LOGGING_OUT_SUCCESSFUL,
          payload: null
         });

         if (callback)
          callback();
      }
    })
}

export default logoutUser;