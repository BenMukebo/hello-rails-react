import React from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Greeting from './Greeting';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => ('Home!')} />
          <Route path="/hello" render={() => <Greeting message="Friend" />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
