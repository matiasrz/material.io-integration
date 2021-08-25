import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Container = ({ children }) => (
  <div className="mdc-layout-grid">
    {children}
    <div className="img-testing">Image HEre!</div>
  </div>
)

// PropTypes Validation Rules
Container.propTypes = {
  children: PropTypes.object.isRequired
};

export default Container;