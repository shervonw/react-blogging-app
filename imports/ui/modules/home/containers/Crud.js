import React, { Component } from 'react';
import { List } from '../components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import View from '../components/View';
import Edit from '../components/Edit';
import { 
  getBlog,
  createBlog,
  updateBlog, 
  deleteBlog, 
  titleTextChange, 
  descriptionTextChange 
} from '../actions';

class Cud extends Component {

  componentDidMount() {
    const _id = this.props.match.params.id;

    this.props.getBlog(_id, (result) => {
      if (result) {
        this.props.titleTextChange(result.title);
        this.props.descriptionTextChange(result.description);
      } else {
        this.props.titleTextChange('');
        this.props.descriptionTextChange('');
      }
    });
  }

  render() {
    const selectComponent = (this.props.blog && this.props.match.url.indexOf('view') > -1) ? 
      <View {...this.props} />
    :
      <Edit {...this.props} />;

    return (
      <div>
        {selectComponent}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  blog: state.app.blog,
  title: state.app.title,
  description: state.app.description,
});

const mapDispatchToProps = (dispatch) => ({
  getBlog: (id, callback) => dispatch(getBlog(id, callback)),
  createBlog: (id, callback) => dispatch(createBlog(id, callback)),
  updateBlog: (post, id, callback) => dispatch(updateBlog(post, id, callback)),
  deleteBlog: (id, callback) => dispatch(deleteBlog(id, callback)),
  titleTextChange: (text) => dispatch(titleTextChange(text)), 
  descriptionTextChange: (text) => dispatch(descriptionTextChange(text)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cud));