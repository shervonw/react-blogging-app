import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Grid } from 'semantic-ui-react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import {
  usernameTextChange,
  emailTextChange, 
  passwordTextChange,
  createUser,
  loginUser,
  getCurrentUser
} from '../actions';

class Auth extends Component {
  state = {
    showSignUp: false
  }

  componentWillMount() {
    // this.props.getCurrentUser((response) => {
    //   if (response) {
    //      this.props.history.push('/');
    //   }
    // });
  }

  showSignUpScreen(flag) {
    this.setState({showSignUp: flag});
  }

  render() {

    const view = (this.state.showSignUp) ? 
      <SignUpForm toggleView={() => this.showSignUpScreen(!this.state.showSignUp)} {...this.props} /> 
      : 
      <LoginForm toggleView={() => this.showSignUpScreen(!this.state.showSignUp)} {...this.props} />;

    return (
      <Grid columns={3} style={{marginTop: '10%',}}>
        <Grid.Row>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            {view}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  username: state.auth.username,
  email: state.auth.email,
  password: state.auth.password,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  usernameTextChange: (text) => dispatch(usernameTextChange(text)),
  emailTextChange: (text) => dispatch(emailTextChange(text)),
  passwordTextChange: (text) => dispatch(passwordTextChange(text)),
  createUser: (user, callback) => dispatch(createUser(user, callback)),
  loginUser: (user, callback) => dispatch(loginUser(user, callback)),
  getCurrentUser: (callback) => dispatch(getCurrentUser(callback)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Auth));