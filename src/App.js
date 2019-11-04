import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import Login from './Pages/Login/Login';
import Character from './Pages/Characters/Pages/Character/Character';
import Characters from './Pages/Characters/Characters';
import Episodes from './Pages/Episodes/Episodes';
import Episode from './Pages/Episodes/Pages/Episode/Episode';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import themes from './components/themes';
import './scss/main.scss';
import 'bootstrap/scss/bootstrap.scss';
import { AUTHENTICATED_QUERY } from './client/auth';
import GlobalStyle from './components/global-style';
import client from './client/apllo-client';
import Header from './components/header';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'react-bootstrap';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={themes[theme]}>
          <GlobalStyle />
          <Header />
          <Container>
            <Switch>
              <Route path="/login">
                <Login setTheme={toggleTheme} />
              </Route>
              <PrivateRoute path="/characters/:id">
                <Character />
              </PrivateRoute>
              <PrivateRoute path="/characters">
                <Characters />
              </PrivateRoute>
              <Route path="/episodes/:id">
                <Episode />
              </Route>
              <PrivateRoute path="/episodes">
                <Episodes />
              </PrivateRoute>
              <Route path="/">
                <Redirect to="/episodes" />
              </Route>
              <Route path="*">
                <h1>404 Not Found</h1>
              </Route>
            </Switch>
          </Container>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  const { data } = useQuery(AUTHENTICATED_QUERY);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        data.authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
