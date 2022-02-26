import React from 'react';
import PropTypes from 'prop-types';

const Greeting = ({ msgProps }) => (
  <>
    Messagas:
    {' '}
    {msgProps}
  </>
);

// class Greeting extends React.Component {
//   render() {
//     return (
//     );
//   }
// }

Greeting.propTypes = {
  msgProps: PropTypes.string,
};

Greeting.defaultProps = {
  msgProps: 'Ben',
};
export default Greeting;
