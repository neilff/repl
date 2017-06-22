import { SCRIPT } from '../actions/script';

const initialState = {
  scripts: [],
};

function scriptReducer(state = initialState, action = {}) {
  switch (action.type) {

  case SCRIPT.MARK_SCRIPT_READY:
    return {
      ...state,
      scripts: state.scripts.map((script) => {
        return {
          ...script,
          isReady: script.isReady || script.url === action.payload.url
        };
      })
    };

  default:
    return state;
  }
}

export default scriptReducer;
