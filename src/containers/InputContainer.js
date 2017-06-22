import React from 'react';
import { connect } from 'react-redux';

import * as codeActions from '../actions/code';

import Editor from '../components/Editor';
import Pane from '../components/Pane';

class InputContainer extends React.Component {
  componentDidMount() {
    const { gist } = this.props;
    if (gist) {
      const [id, file] = gist.split('/');
      fetch(`https://api.github.com/gists/${id}`)
        .then((res) => res.json())
        .then(({files}) => {
          if (!files) {
            return {
              content: `// Gist ${id} not found.`
            };
          }
          // If file is specified, look for that.
          if (file) {
            if (files[file]) {
              return files[file];
            }
          // Otherwise, take the first file ending with .js.
          // Or if that's not found, just take the first file.
          } else {
            const jsFileName = Object.keys(files)
              .find((key) => files[key].filename.endsWith('.js')) ||
              Object.keys(files)[0];
            if (jsFileName) {
              return files[jsFileName];
            }
          }
          // No file found, so return comment as source.
          return {
            content: `// File ${file ? `${file} ` : ''} not found.`
          }
        })
        .then((file) => {
          this.props.changeValue(file.content);
        })
    }
  }
  render() {
    const { props } = this;
    return (
      <Pane title="Input">
        <Editor
          onChange={ props.changeValue }
          value={ props.value } />
      </Pane>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.code.value,
  gist: state.code.gist
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (value) => dispatch(codeActions.changeValue(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InputContainer);
