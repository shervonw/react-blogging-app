import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getBlog } from '../actions';
import moment from 'moment';
import FontIcon from 'material-ui/FontIcon';
import asteroid from '../../../../api/blogs/astroid';

class View extends Component {

  componentWillMount() {
    const _id = this.props.match.params.id;
    this.props.getBlog(_id);

    asteroid.call('user')
    .then(result => console.log(result)); 
  }

  render() {
    const {
      blog
    } = this.props;

    const iconStyles = {
      marginRight: 8,
      padding: 3,
      fontSize: 18
    };

    const dateCreated = (blog.createdAt) ? blog.createdAt.$date : new Date();

    return (
      <div>
        <div>
          <h2 style={{fontSize: 36, fontWeight: 400, marginTop: 25, marginBottom: 5}}>
            {blog.title}
          </h2>
          <hr></hr>
          <div style={{height: 30, display: 'flex', alignItems: 'center',}}>
            <FontIcon className="material-icons" style={iconStyles}>account_circle</FontIcon>
            <span style={{color: 'rgba(0,0,0,0.4)', fontSize: 13, marginRight: 10,}}> 
              {blog.user}
            </span>
            <FontIcon className="material-icons" style={iconStyles}>today</FontIcon>
            <span style={{color: 'rgba(0,0,0,0.4)', fontSize: 13, marginRight: 10,}}> 
              {moment(dateCreated).format("MMMM DD, YYYY")}
            </span>
          </div>
        </div>
        <div style={{marginTop: 35}}>
          <p>{blog.description}</p>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  blog: state.app.blog
});

const mapDispatchToProps = (dispatch) => ({
  getBlog: (id) => dispatch(getBlog(id))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(View));