import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getBlog } from '../actions';
import { Button } from 'semantic-ui-react';
import moment from 'moment';
import FontIcon from 'material-ui/FontIcon';


const View = (props) => {

  const iconStyles = {
    marginRight: 8,
    padding: 3,
    fontSize: 18
  };

  const {
    blog,
    user
  } = props;

  console.log(props)

  const showEditButton = (user) ? 
    <Button onClick={() => this.props.history.push(`/post/edit/${_id}`)}>
      Edit
    </Button>
  :
    null;
  const dateCreated = (blog && blog.createdAt) ? blog.createdAt.$date : null;

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
          {showEditButton}
        </div>
      </div>
      <div style={{marginTop: 35}}>
        <p style={{fontSize: 16,}}>
          {blog.description}
        </p>
      </div>
    </div>
  )
  
}

export default View;