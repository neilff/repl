import React from 'react';
import { connect } from 'react-redux';

import EvaluatorScriptsDelay from '../containers/EvaluatorScriptsDelay';
import Pane from '../components/Pane';

const OutputContainer = (props) => (
  <Pane title="Output">
    <EvaluatorScriptsDelay value={ props.value } />
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
