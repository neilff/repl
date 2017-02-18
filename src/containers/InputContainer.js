import React from 'react';
import { connect } from 'react-redux';

import * as codeActions from '../actions/code';

import Editor from '../components/Editor';
import Pane from '../components/Pane';

const InputContainer = (props) => (
  <Pane title="Input">
    <Editor
      onChange={ props.changeValue }
      value={ props.value } />
  </Pane>
);

const mapStateToProps = (state) => ({
  value: state.code.value,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value) => dispatch(codeActions.changeValue(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputContainer);