import asteroid from '../../../../api/blogs/asteroid';
import {
  GET_ALL_BLOGS
} from './actionTypes';

const getAllblogs = () => { 
  return dispatch => asteroid.call('getBlogs')
    .then(result => dispatch({
      type: GET_ALL_BLOGS,
      payload: result
    }));    
}

export default getAllblogs;

