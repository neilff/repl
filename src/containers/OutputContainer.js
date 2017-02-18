import React from 'react';
import { connect } from 'react-redux';

import Evaluator from '../components/Evaluator';
import Pane from '../components/Pane';

const OutputContainer = (props) => (
  <Pane title="Output">
    <Evaluator value={ props.value } />
  </Pane>
);

const mapStateToProps = (state) => ({
  value: state.code.value,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OutputContainer);
