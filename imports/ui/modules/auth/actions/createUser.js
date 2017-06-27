import asteroid from '../../../../api/blogs/asteroid';
import {
  CREATE_NEW_USER
} from './actionTypes';

const createUser = (user, callback) => { 
  return dispatch => Accounts.createUser(user, (error) => {
    if (error) {
      throw new Meteor.Error("0", error);
    } else {

      dispatch({ 
        type: CREATE_NEW_USER,
        payload: Meteor.user()
      });

      // save user data to localstorage

      if (callback) 
        callback();
    }
  })
}

export default createUser;

