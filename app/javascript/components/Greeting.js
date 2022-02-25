import React from 'react';
import PropTypes from 'prop-types';

class Greeting extends React.Component {
  render() {
    return (
      <>
        Message:
        {' '}
        {this.props.message}
      </>
    );
  }
}

Greeting.propTypes = {
  message: PropTypes.string,
};
export default Greeting;
