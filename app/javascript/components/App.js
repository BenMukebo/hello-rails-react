import React from 'react';
// import PropTypes from 'prop-types';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
import configureStore from '../redux/configStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => ('Home!')} />
        <Route path="/hello" render={() => <Greeting message="Hello guys" />} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
