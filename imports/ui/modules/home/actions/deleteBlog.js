import asteroid from '../../../../api/blogs/asteroid';
import {
  DELETING_BLOG,
  DELETING_BLOG_SUCCESSFUL,
  DELETING_BLOG_FAILED
} from './actionTypes';

const deleteBlog = (id, callback) => { 
  return dispatch => {

    dispatch({type: DELETING_BLOG});

    return asteroid.call('removeBlog', id)
      .then(result => {

        dispatch({type: DELETING_BLOG_SUCCESSFUL});
        
        if (callback)
          callback();
          
      })
      .catch(error => {
        console.log(error)
        dispatch({
          type: DELETING_BLOG_FAILED
        })
      });
    
  }
}

export default deleteBlog;