import React from 'react';
import moment from 'moment';

const List = (props) => ({
  render() {
    return (
      <div style={{marginRight: 8, padding: 15,}}>
        <h2 style={{fontSize: 36, marginTop: 25, marginBottom: 25}}>
          <a>{props.title}</a>
        </h2>
        <div>
          <span style={{paddingRight: 5}}>{props.user}</span>
          <span style={{paddingRight: 5}}>{moment(props.createdAt.$date).format("MMMM DD, YYYY")}</span>
        </div>
        <p>{props.description}</p>
      </div>
    );
  }
});

export default List;