import React from 'react';
import loadScripts from 'scriptjs';
import { connect } from 'react-redux';

import Evaluator from '../components/Evaluator';

import * as scriptActions from '../actions/script';

class EvaluatorScriptDelay extends React.Component {
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
    if (!this.state.isReady) {
      this.props.scripts.forEach((script) => {
        loadScripts(script.url, () => {
          this.props.markScriptReady(script.url);
        })
      })
    }
  }
  componentWillReceiveProps(nextProps) {
    if (!this.state.isReady) {
      this.setState({
        isReady: this.isReady(nextProps)
      });
    }
  }
  render() {
    const value = this.state.isReady ?
      this.props.value :
      '';
    return <Evaluator value={value}/>;
  }
};

const mapStateToProps = (state) => ({
  scripts: state.script.scripts
});

const mapDispatchToProps = (dispatch) => ({
  markScriptReady: (script) => dispatch(scriptActions.markScriptReady(script))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EvaluatorScriptDelay);
