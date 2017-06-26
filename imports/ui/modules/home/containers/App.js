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
        <div style={{width: '60%', float:'left',}}>
          {blogs}
        </div>
        <div style={{width: '40%', float:'left', height: 200, backgroundColor: 'rgba(0,0,0,0.4)', }}>
          
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