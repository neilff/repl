import React from 'react';
import bemify from 'bemify-js';

import './App.css';

const bem = bemify('app');

import InputContainer from './InputContainer';
import Navbar from '../components/Navbar';
import OutputContainer from './OutputContainer';

const App = () => {
  return (
    <div className={bem()}>
      <Navbar title="js-repl" />
      <div className={bem('__row')}>
        <div className={bem('__column')}>
          <InputContainer />
        </div>
        <div className={bem('__column')}>
          <OutputContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
