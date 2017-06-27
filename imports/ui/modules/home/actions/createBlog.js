import asteroid from '../../../../api/blogs/asteroid';
import {
  CREATE_BLOG,
  CREATE_BLOG_SUCCESSFUL,
  CREATE_BLOG_FAILED
} from './actionTypes';

const createBlog = (post, callback) => { 
  return dispatch => asteroid.call('insertBlog', post)
    .then(result => {
      dispatch({type: CREATE_BLOG});

      dispatch({type: CREATE_BLOG_SUCCESSFUL});

      if (callback)
        callback(result);
        
    })
    .catch(error => {
      dispatch({
        type: CREATE_BLOG_FAILED
      })

      console.log('create blog' ,error)
    });
    
}

export default createBlog;