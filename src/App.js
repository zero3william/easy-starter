import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import AppLayoutRoute from './layout/AppLayout';

import Login from './screen/Login';
import PlayerList from './screen/PlayerList';
import AgentList from './screen/AgentList';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={Login} />
          <AppLayoutRoute path="/playerlist" component={PlayerList} />
          <AppLayoutRoute path="/agentlist" component={AgentList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
