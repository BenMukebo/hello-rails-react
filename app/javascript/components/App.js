import React from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './Greeting';
// import Home from './Home';
// import NavBar from './NavBar';
import store from '../redux/configStore';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
