import React, { PropTypes } from 'react';
import bemify from 'bemify-js';

import './Editor.css';

const bem = bemify('editor');

const Editor = (props) => {
  return (
    <div className={bem()}>
      <textarea
        className={bem('__input')}
        value={ props.value }
        onChange={ (e) => props.onChange(e.target.value) } />
    </div>
  );
}

Editor.displayName = 'Editor';
Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;