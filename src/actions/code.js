import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

export const CODE = createTypes('CODE', [
  'CHANGE_VALUE',
]);

export const changeValue = (value) => createAction(CODE.CHANGE_VALUE, { value });