import React, { PropTypes } from 'react';
import stringify from 'json-stringify-pretty-compact';
import bemify from 'bemify-js';

import './Evaluator.css';

const bem = bemify('evaluator');

const Evaluator = (props) => {
  let result = null;
  let error;

  try {
    /* eslint-disable */
    result = eval(global.Babel.transform(props.value, {
      presets: ['es2015', 'react', 'stage-0']
    }).code);

    result = result === 'use strict' ? undefined : result;
    /* eslint-enable */
  } catch (ex) {
    error = ex.toString();
  }

  const content = !error ?
    stringify(result) :
    <div className={bem('__error')}>{ error }</div>;

  return (
    <pre className={bem()}>
      { content }
    </pre>
  );
}

Evaluator.displayName = 'Evaluator';
Evaluator.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Evaluator;