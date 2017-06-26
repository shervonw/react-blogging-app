import React, { Component } from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { logoutUser } from '../../auth/actions';


class Nav extends Component {

  render() {
    const loginState = (this.props.user) ? 
      <Button floated='right' onClick={() => {
        this.props.logoutUser(() => {
          this.props.history.push('/');
        })}
      }>
        Logout
      </Button>
    : 
      <Button floated='right' onClick={() => {this.props.history.push('/login')}}>
        Login
      </Button>
    
    return (
      <div>
        <Menu pointing secondary size='huge'>
          <Menu.Item name='home' link={true} active={true}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item name='create' link={true}>
            <Link to='/create'>Create</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='login' link={true} onClick={this.handleItemClick}>
              {loginState}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: (callback) => dispatch(logoutUser(callback))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);