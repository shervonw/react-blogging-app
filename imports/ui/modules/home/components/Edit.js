import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import moment from 'moment';
import FontIcon from 'material-ui/FontIcon';
import { TextArea, Input, Form, Button } from 'semantic-ui-react';
import { getBlog, updateBlog, deleteBlog, titleTextChange, descriptionTextChange } from '../actions';

class Edit extends Component {

  state = {
    title: '',
    description: '',
  }

  setTitle(newTitle) {
    this.setState({title: newTitle})
  }

  setDescription(newDescription) {
    this.setState({description: newDescription})
  }

  componentWillMount() {
    const _id = this.props.match.params.id;
    this.props.getBlog(_id);
  }

  componentDidMount() {
    this.setState({
      title: this.props.blog.title, 
      description: this.props.blog.description, 
    });
  }

  render() {
    const {
      blog,
      titleTextChange,
      descriptionTextChange,
      updateBlog,
      deleteBlog
    } = this.props;

    const loadButtons = (this.props.match.path === '/create') ?
      <div>
        <Button onClick={() => this.props.history.goBack()}>
          Cancel
        </Button>

        <Button onClick={() => deleteBlog(blog._id)}>
          Delete
        </Button>

        <Button onClick={() => updateBlog({title, description}, blog._id)}>
          Save
        </Button> 
      </div>
    :
      <div>
        <Button onClick={() => this.props.history.goBack()}>
          Cancel
        </Button>
      </div>;

    const iconStyles = {
      marginRight: 8,
      padding: 3,
      fontSize: 18
    };

    return (
      <div >
        <div style={{marginTop: 20,}}> 
          
          <div>           
            {loadButtons}
          </div>
          
          <Form>
            <Input size='big' type='text' style={{width: '100%', marginTop: 20, marginBottom: 20,}} placeholder='Title' onChange={(event, data) => {
              titleTextChange(data.value);
            }}/>

            <TextArea placeholder='Description' rows={15} onChange={(event, data) => {
              descriptionTextChange(data.value);
            }}/>
          </Form>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  blog: state.app.blog,
  title: state.app.title,
  description: state.app.description
});

const mapDispatchToProps = (dispatch) => ({
  getBlog: (id) => dispatch(getBlog(id)),
  updateBlog: (post, id) => dispatch(updateBlog(post, id)),
  deleteBlog: (id) => dispatch(deleteBlog(id)),
  titleTextChange: (text) => dispatch(titleTextChange(text)), 
  descriptionTextChange: (text) => dispatch(descriptionTextChange(text)),
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Edit));