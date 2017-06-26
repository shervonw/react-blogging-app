import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import FontIcon from 'material-ui/FontIcon';

const List = (props) => ({
  
  render() {
    
    const iconStyles = {
      marginRight: 8,
      padding: 3,
      fontSize: 18
    };

    return (
      <div style={{marginRight: 8, padding: 15,}}>
        <h2 style={{fontSize: 36, marginTop: 25, marginBottom: 25}}>
          <Link to={{ pathname: `/post/${props._id}` }}>{props.title}</Link>
        </h2>
        <div style={{height: 30, display: 'flex', alignItems: 'center',}}>
          <FontIcon className="material-icons" style={iconStyles}>account_circle</FontIcon>
          <span style={{color: 'rgba(0,0,0,0.4)', fontSize: 13, marginRight: 10,}}> 
            {props.user}
          </span>
          <FontIcon className="material-icons" style={iconStyles}>today</FontIcon>
          <span style={{color: 'rgba(0,0,0,0.4)', fontSize: 13, marginRight: 10,}}> 
            {moment(props.createdAt.$date).format("MMMM DD, YYYY")}
          </span>
        </div>
        <p>{props.description}</p>
      </div>
    );
  }
});

export default List;