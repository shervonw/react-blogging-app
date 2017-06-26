import asteroid from '../../../../api/blogs/asteroid';
import {
  UPDATING_BLOG,
  UPDATING_BLOG_SUCCESSFUL,
  UPDATING_BLOG_FAILED
} from './actionTypes';

const updateBlog = (post, id, callback) => { 
  return dispatch => asteroid.call('updateBlog', post, id)
    .then(result => {
      dispatch({type: UPDATING_BLOG});

      dispatch({type: UPDATING_BLOG_SUCCESSFUL});

      callback(result);
    })
    .catch(error => dispatch({
      type: UPDATING_BLOG_FAILED
    }));
    
}

export default updateBlog;