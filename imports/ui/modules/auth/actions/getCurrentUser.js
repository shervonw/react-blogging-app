import asteroid from '../../../../api/blogs/asteroid';
import {
  GET_CURRENT_USER
} from './actionTypes';

const getCurrentUser = (callback) => { 
  return dispatch => asteroid.call('getCurrentUser')
    .then(result => {

      dispatch({
        type: GET_CURRENT_USER,
        payload: result
      });

      callback(result);
    });
    
}

export default getCurrentUser;