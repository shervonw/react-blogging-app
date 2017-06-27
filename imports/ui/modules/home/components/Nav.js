import React, { Component } from 'react';
import { Menu, Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { logoutUser } from '../../auth/actions';
import SweetAlert from 'sweetalert-react';

class Nav extends Component {
  state = {
    show: false
  }

  toggleShow(visisble) {
    this.setState({show: visisble})
  }

  render() {
    const loginState = (this.props.user) ? 
      <Button floated='right' onClick={() => {
        this.props.logoutUser(() => {
          this.toggleShow(!this.state.show);
        })}
      }>
        Logout
      </Button>
    : 
      <Button floated='right' onClick={() => {this.props.history.push('/login')}}>
        Login / Sign-up
      </Button>
    
    return (
      <div>
        <Menu pointing secondary size='huge'>
          <Menu.Item name='home' link={true} active={true}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item name='create' link={true}>
            <Link to='/create'>Create a new post</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item name='login' link={true}>
              {loginState}
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <SweetAlert
          show={this.state.show}
          type={'success'}
          title={'Logged Out!'}
          text={'You have been successfully logged out'}
          onConfirm={() => {
            this.toggleShow(!this.state.show);
            this.props.history.push('/');
          }}
        />
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