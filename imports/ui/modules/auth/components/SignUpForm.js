import React from 'react';
import { Grid, Button, Input, Form, Header } from 'semantic-ui-react';

const SignUpForm = (props) => ({
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
    } = props;

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
            console.log("Done")    
          })}>
            Sign Up
          </Button>
          <div> 
            <a onClick={toggleView}>Already have an account? Login</a>
          </div>
        </Form>
      </div>
    );
  }
});

export default SignUpForm;