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

    const description = () => {
      if (props.description.length > 250) {
        return props.description.slice(0, 250) + '...';
      } else {
        return props.description;
      }
    }

    return (
      <div style={{marginRight: 8, padding: 15,}}>
        <h2 style={{fontSize: 36, marginTop: 25, marginBottom: 25}}>
          <Link style={{cursor: 'pointer'}} to={{ pathname: `/post/view/${props._id}` }}>{props.title}</Link>
        </h2>
        <div style={{height: 30, display: 'flex', alignItems: 'center', marginBottom: 10,}}>
          <FontIcon className="material-icons" style={iconStyles}>account_circle</FontIcon>
          <span style={{color: 'rgba(0,0,0,0.4)', fontSize: 13, marginRight: 10,}}> 
            {props.user}
          </span>
          <FontIcon className="material-icons" style={iconStyles}>today</FontIcon>
          <span style={{color: 'rgba(0,0,0,0.4)', fontSize: 13, marginRight: 10,}}> 
            {moment(props.createdAt.$date).format("MMMM DD, YYYY")}
          </span>
        </div>
        <p>{description()}</p>
      </div>
    );
  }
});

export default List;