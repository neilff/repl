import React, { PropTypes } from 'react';

const Evaluator = (props) => {
  return (
    <pre>{ JSON.stringify(props.value, null, 2)}</pre>
  );
}

Evaluator.displayName = 'Evaluator';
Evaluator.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Evaluator;