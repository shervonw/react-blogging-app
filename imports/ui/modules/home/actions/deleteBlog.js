import asteroid from '../../../../api/blogs/asteroid';
import {
  DELETING_BLOG,
  DELETING_BLOG_SUCCESSFUL,
  DELETING_BLOG_FAILED
} from './actionTypes';

const deleteBlog = (id, callback) => { 
  return dispatch => asteroid.call('removeBlog', id)
    .then(result => {
      dispatch({type: DELETING_BLOG});

      dispatch({type: DELETING_BLOG_SUCCESSFUL});

      callback(result);
    })
    .catch(error => dispatch({
      type: DELETING_BLOG_FAILED
    }));
    
}

export default deleteBlog;