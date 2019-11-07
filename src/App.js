import React, { useState } from 'react';
import './scss/main.scss';
import 'bootstrap/scss/bootstrap.scss';

import { ApolloProvider } from '@apollo/react-hooks';
import Login from './Pages/Login/Login';
import Character from './Pages/Characters/Pages/Character/Character';
import Characters from './Pages/Characters/Characters';
import Episodes from './Pages/Episodes/Episodes';
import Episode from './Pages/Episodes/Pages/Episode/Episode';
import Starship from './Pages/Starships/Starship';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import themes from './components/themes';

import { AUTHENTICATED_QUERY } from './client/auth';
import GlobalStyle from './components/globalStyle';
import client from './client/apllo-client';
import Header from './components/Header/header';
import { useQuery } from '@apollo/react-hooks';
import { Container } from 'react-bootstrap';
import Logout from './Pages/Logout/Logout';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const storageTheme = localStorage.getItem('theme');

  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={themes[storageTheme || theme]}>
          <GlobalStyle />
          <Header setTheme={toggleTheme} />
          <Container>
            <Switch>
              <Route path="/login">
                <Login setTheme={toggleTheme} />
              </Route>
              <Route path="/logout">
                <Logout />
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
              <PrivateRoute path="/starships/:id">
                <Starship />
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
