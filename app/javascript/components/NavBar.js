import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div>
    <NavLink to="/" activeclassname="active">
      Home
    </NavLink>
    {' '}
    {/* <NavLink to="/hello" activeclassname="active">
        greeting
      </NavLink> */}
  </div>
);

export default NavBar;
