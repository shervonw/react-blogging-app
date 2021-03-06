import React, { Component } from 'react';
import { List } from '../components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getAllBlogs } from '../actions';

class App extends Component {

  componentDidMount() {
    this.props.getAllBlogs();
  }

  render() {

    const blogs = this.props.blogs.map((blog, index) => {
      return <List key={index} {...blog} />
    });

    return (
      <div>
        <div style={{width: '80%', margin: 'auto'}}>
          {blogs}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.app.blogs
});

const mapDispatchToProps = (dispatch) => ({
  getAllBlogs: () => dispatch(getAllBlogs())
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));