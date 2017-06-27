import React, { Component } from 'react';
import { Grid, Button, Input, Form, Header } from 'semantic-ui-react';
import SweetAlert from 'sweetalert-react';

class SignUpForm extends Component {
  state = {
    show: false
  }

  toggleShow(visisble) {
    this.setState({show: visisble})
  }

  render() {

    const {
      username,
      email,
      password,
      usernameTextChange,
      emailTextChange,
      passwordTextChange,
      createUser,
      toggleView
    } = this.props;

    const user = {
      username: this.username,
      email: this.email,
      password: this.password
    }

    return (
      <div>
        <Header textAlign='center' as='h1' style={{marginBottom: '5%',}}>Sign Up</Header>
        <Form>
          <Form.Field>
            <Input size='big' type='text' placeholder='username' onChange={(event, data) => {
              usernameTextChange(data.value);
              this.username = data.value;
            }}/>
          </Form.Field>
          <Form.Field>
            <Input size='big' type='email' placeholder='email' onChange={(event, data) => {
              emailTextChange(data.value);
              this.email = data.value;
            }}/>
          </Form.Field>
          <Form.Field>
            <Input size='big' type='password' placeholder='password' onChange={(event, data) => {
              passwordTextChange(data.value);
              this.password = data.value;
            }}/>
          </Form.Field>
          <Button floated='right' onClick={() => createUser(user, () => {
            this.toggleShow(!this.state.show);
          })}>
            Sign-up
          </Button>
          <div> 
            <a style={{cursor: 'pointer',}} onClick={toggleView}>Already have an account? Login</a>
          </div>
        </Form>

        <SweetAlert
          show={this.state.show}
          title="Welcome!"
          text="Thank you for signing up! Enjoy"
          onConfirm={() => {
            this.toggleShow(!this.state.show);
            this.props.history.replace('/'); 
          }}
        />
      </div>
    );
  }
};

export default SignUpForm;