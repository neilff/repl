import React, { PropTypes } from 'react';
import bemify from 'bemify-js';

import './Pane.css';

const bem = bemify('pane');

const Pane = (props) => {
  return (
    <div className={bem()}>
      <div className={bem('__title')}>{ props.title }</div>
      <div className={bem('__content')}>{ props.children }</div>
    </div>
  );
}

Pane.displayName = 'Pane';
Pane.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Pane;