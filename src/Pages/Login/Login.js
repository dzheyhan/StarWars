import React, { useState } from 'react';
import { Button, Container, Row, Col, Form } from 'react-bootstrap';
import { gql } from 'apollo-boost';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { Redirect } from 'react-router-dom';

const LOGIN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

function Login(props) {
  const client = useApolloClient();
  const state = {
    loginError: false,
  };

  const [login, { data, error }] = useMutation(LOGIN_MUTATION);

  if (error) {
    state['loginError'] = 'Invalid credential';
  }

  if (data) {
    localStorage.setItem('token', 'Bearer ' + data['signIn']['token']);
    client.writeData({
      data: { authenticated: true },
    });
    return <Redirect to="/episodes" />;
  }

  return (
    <LoginForm
      setTheme={props.setTheme}
      login={login}
      error={state['loginError']}
    ></LoginForm>
  );
}

function LoginForm(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    error: false,
  });

  const setEmail = ({ target: { value: email } }) =>
    setState({ ...state, email: email });

  const setPassword = ({ target: { value: password } }) =>
    setState({ ...state, password: password });

  const handleSubmit = e => {
    e.preventDefault();
    props.login({
      variables: {
        email: state.email,
        password: state.password,
      },
    });
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={{ span: 6, offset: 3 }}>
          <h1 className="text-center" onClick={() => props.setTheme()}>
            SWAPP
          </h1>
          <div className="mt-3">
            <Form className="pr-5 pl-5">
              {props.error ? <p className="text-danger">{props.error}</p> : ''}

              <Form.Group controlId="formBasicEmail">
                <Form.Control
                  onChange={setEmail}
                  value={state.email}
                  type="email"
                  placeholder="Enter"
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  onChange={setPassword}
                  value={state.password}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <div className="text-right">
                <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
