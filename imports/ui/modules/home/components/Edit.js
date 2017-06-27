import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TextArea, Input, Form, Button } from 'semantic-ui-react';
//import { getBlog, updateBlog, deleteBlog, titleTextChange, descriptionTextChange } from '../actions';

const Edit = (props) => {

  const {
    user,
    blog,
    title,
    history,
    description,
    titleTextChange,
    descriptionTextChange,
    updateBlog,
    createBlog,
    deleteBlog
  } = props;

  const showDeleteBtn = (props.match.path !== '/create') ?
    <Button onClick={() => deleteBlog(blog._id, (result) => {
      alert("Post deleted!"); 
      history.replace('/'); 
    })}>
      Delete
    </Button>
  :
    null;

  const updateOrCreateFn = () => {
    if (props.match.path === '/create') {
      return createBlog({user: user.username, title, description}, (newPostId) => {
        alert("Post created!"); 
        history.replace(`/post/view/${newPostId}`);
      })
    } else {
      return updateBlog({title, description}, blog._id, () => {
        alert("Blog saved");
        history.goBack()
      });
    }
  }

  return (
    <div >
      <div style={{marginTop: 20,}}> 
        <div>      
          <Button onClick={() => history.goBack()}>
            Cancel
          </Button>

          {showDeleteBtn}

          <Button onClick={() => updateOrCreateFn()}>
            Save
          </Button>    
          
        </div>       
        <Form>
            <Input size='big' type='text' value={title} style={{width: '100%', marginTop: 20, marginBottom: 20,}} placeholder='Title' onChange={(event, data) => {
              titleTextChange(data.value);
            }} />

            <TextArea placeholder='Description' value={description} rows={15} onChange={(event, data) => {
              descriptionTextChange(data.value);
            }}/>
          </Form>
      </div>
    </div>
  )
}


export default Edit;