import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

export const SCRIPT = createTypes('SCRIPT', [
  'MARK_SCRIPT_READY',
]);

export const markScriptReady = (url) => createAction(SCRIPT.MARK_SCRIPT_READY, { url });
