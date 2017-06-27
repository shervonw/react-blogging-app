import asteroid from '../../../../api/blogs/asteroid';
import {
  GET_BLOG
} from './actionTypes';

const getBlog = (id, callback) => { 
  return dispatch => asteroid.call('getBlog', id)
    .then(result => {
      dispatch({
        type: GET_BLOG,
        payload: result
      });

      if (callback) 
        callback(result);
  });    
}

export default getBlog;

