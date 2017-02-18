import React, { PropTypes } from 'react';
import bemify from 'bemify-js';

import './Navbar.css';

const bem = bemify('navbar');

const Navbar = (props) => {
  return (
    <div className={bem()}>
      <div className={bem('__title')}>{ props.title }</div>
    </div>
  );
}

Navbar.displayName = 'Navbar';
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;