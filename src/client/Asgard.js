import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../pages/home';
import NHLPage from '../pages/nhl_page'
import SportsPage from '../pages/sports'
import NotFoundPage from '../pages/not_found_page'

import AppHeader from '../components/AppHeader'

import { Container } from 'semantic-ui-react'

const App = () => {
  return (
    <Router>
      <Container fluid>

        <AppHeader>
          <AppHeader.Item active url="/" text="Home" />
          <AppHeader.Item active url="/sports" text="Sports" />
          <AppHeader.Item active url="/publications" text="Publications" />
          <AppHeader.Item active url="/about" text="About" />
        </AppHeader>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/nhl/:team" component={NHLPage} />
          <Route path="/sports" component={SportsPage} />
          <Route component={NotFoundPage} />
        </Switch>

      </Container>
    </Router>
  );
};

export default App;
