import React from 'react';
import { connect } from 'react-redux';
import loadScripts from 'scriptjs';

import Pane from '../components/Pane';
import Evaluator from '../components/Evaluator';

import * as scriptActions from '../actions/script';

class OutputContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isReady: this.isReady(props)
    };
  }
  isReady(props) {
    return props.scripts
      .filter((script) => !script.isReady)
      .length === 0
  }
  componentDidMount() {
    const { state, props } = this;
    if (!state.isReady) {
      props.scripts.forEach((script) => {
        loadScripts(script.url, () => {
          props.markScriptReady(script.url);
        })
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    const { state } = this;
    if (!state.isReady) {
      this.setState({
        isReady: this.isReady(nextProps)
      });
    }
  }
  render() {
    const { state, props } = this;
    const value = state.isReady ?
      props.value :
      '';
    return (
      <Pane title="Output">
        <Evaluator value={ value } stringify={ props.stringify }/>
      </Pane>
    );
  }
};

const mapStateToProps = (state) => ({
  value: state.code.value,
  scripts: state.script.scripts,
  stringify: state.code.stringify,
});

const mapDispatchToProps = (dispatch) => ({
  markScriptReady: (script) => dispatch(scriptActions.markScriptReady(script)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OutputContainer);
