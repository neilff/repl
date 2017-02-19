import React, { PropTypes, Component } from 'react';
import bemify from 'bemify-js';
import _ from 'lodash';

import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';
import './Editor.css';

const bem = bemify('editor');

import CodeMirror from 'react-codemirror';

const editorConfiguration = {
  lineNumbers: true,
  viewportMargin: Infinity,
  mode: {
    name: 'javascript',
    statementIndent: 2,
  },
  indentUnit: 2,
  tabSize: 2,
};

class Editor extends Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <div className={bem()}>
        <CodeMirror
          className={bem('__input')}
          value={value}
          onChange={_.debounce(onChange, 300).bind(this)}
          options={editorConfiguration} />
      </div>
    );
  }
}

Editor.displayName = 'Editor';
Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;

