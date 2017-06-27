import React from 'react';
import { Grid, Button, Input, Form, Header } from 'semantic-ui-react';

const LoginForm = (props) => ({
  render() {

    const {
      email,
      password,
      emailTextChange,
      passwordTextChange,
      loginUser,
      toggleView
    } = props;

    const user = {
      email: this.email,
      password: this.password
    }

    return (
      <div>
        <Header textAlign='center' as='h1' style={{marginBottom: '5%',}}>Ready to Blog?</Header>
        <Form>
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
          <Button floated='right' onClick={() => loginUser(user, () => {
            props.history.push('/');
          })}>
            Login
          </Button>
          <div> 
            <a style={{cursor: 'pointer',}} onClick={toggleView}>Sign-up</a>
          </div>
        </Form>
      </div>
    );
  }
});

export default LoginForm;