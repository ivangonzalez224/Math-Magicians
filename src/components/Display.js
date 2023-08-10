import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Display = ({ result }) => (
  <div className="container_display">
    {result}
  </div>
);

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;
