import { CODE } from '../actions/code';

const initialState = {
  value: '',
};

function codeReducer(state = initialState, action = {}) {
  switch (action.type) {

  case CODE.CHANGE_VALUE:
    return {
      ...state,
      value: action.payload.value,
    };

  default:
    return state;
  }
}

export default codeReducer;