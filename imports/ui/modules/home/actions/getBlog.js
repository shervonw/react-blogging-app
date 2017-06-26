import asteroid from '../../../../api/blogs/astroid';
import {
  GET_BLOG
} from './actionTypes';

const getBlog = (_id) => { 
  return dispatch => asteroid.call('getBlog', _id)
    .then(result => dispatch({
      type: GET_BLOG,
      payload: result
    }));    
}

export default getBlog;

