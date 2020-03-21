import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Container from '@material-ui/core/Container';

import BooksContainer from './containers/BooksContainer';
import AddBookContainer from './containers/AddBookContainer';


class App extends Component {
  componentDidMount () {
  }

  render () {
    let routes = (
      <Switch>
        <Route path="/" exact component={BooksContainer} />
        <Route path="/addbook" exact component={AddBookContainer} />
        <Redirect to="/"  />
      </Switch>
    );
    
    return (
      <Container component="main" maxWidth="xs">
          {routes}
          <Navigation />
      </Container>
    );
  }

  
}

export default App;
