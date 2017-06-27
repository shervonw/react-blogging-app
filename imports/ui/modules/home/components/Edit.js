import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { TextArea, Input, Form, Button } from 'semantic-ui-react';
import SweetAlert from 'sweetalert-react';


class Edit extends Component {

  state = {
    alertTitle: '',
    text: '',
    type: '',
    callback: null,
    show: false
  }

  toggleShow(visisble) {
    this.setState({show: visisble});
  }

  setAlertOptions(alertType, alertTitle, alertText, callback) {
    this.setState({
      alertTitle: alertTitle,
      text: alertText,
      type: alertType,
      callback: callback
    });
  }

  componentWillUnmount() {
    this.setAlertOptions('info','', '', null);
  }

  render() {
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
    } = this.props;

    const showDeleteBtn = (this.props.match.path !== '/create') ?
      <Button onClick={() => deleteBlog(blog._id, (result) => {
        this.toggleShow(!this.state.show);
        this.setAlertOptions('success', blog.title, 'Your blog post has been successfully deleted!', () =>
          history.push('/')
        ); 
      })}>
        Delete
      </Button>
    :
      null;

    const updateOrCreateFn = () => {
      if (this.props.match.path === '/create') {
        return createBlog({user: user.username, title, description}, (newPostId) => {
          this.toggleShow(!this.state.show);
          this.setAlertOptions('success', title, 'Your blog post has been successfully created!', () =>
            history.replace(`/post/view/${newPostId}`)
          );     
        })
      } else {
        return updateBlog({title, description}, blog._id, () => {
          this.toggleShow(!this.state.show);
          this.setAlertOptions('success', blog.title, 'Your blog post has been successfully updated!', () =>
            history.goBack()
          );
        });
      }
    }

    return (
      <div >
        <div style={{marginTop: 20,}}>    
          <Form>
            <Input size='big' type='text' value={title} style={{width: '100%', marginTop: 20, marginBottom: 20,}} placeholder='Title' onChange={(event, data) => {
              titleTextChange(data.value);
            }} />

            <TextArea placeholder='Description' value={description} rows={15} onChange={(event, data) => {
              descriptionTextChange(data.value);
            }}/>
            </Form>
            <div style={{marginTop: 20,}}>      
              <Button onClick={() => history.goBack()}>
                Cancel
              </Button>
              {showDeleteBtn}
              <Button onClick={() => updateOrCreateFn()}>
                Save
              </Button>    
            </div>
        </div>

        <SweetAlert
          show={this.state.show}
          type={this.state.type}
          title={this.state.alertTitle}
          text={this.state.text}
          onConfirm={() => {
            this.toggleShow(!this.state.show);
            this.state.callback();
          }}
        />
      </div>
    )
  }
}


export default Edit;