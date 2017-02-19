import { stringify } from 'query-string';
import history from '../../common/history';
import base64 from 'base-64';

import { CODE } from '../../actions/code';

export default function queryMiddleware() {
  return next => action => {
    if (action && action.type && action.type !== CODE.CHANGE_VALUE) {
      return next(action);
    }

    const queryString = stringify({
      q: base64.encode(action.payload.value),
    });

    history.push(`${ history.location.pathname }?${ queryString }`);

    return next(action);
  };
}