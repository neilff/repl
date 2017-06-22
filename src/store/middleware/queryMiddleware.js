import { stringify } from 'query-string';
import history from '../../common/history';
import base64 from 'base-64';

import { CODE } from '../../actions/code';

export default function queryMiddleware({getState}) {
  return next => action => {
    if (action && action.type && action.type !== CODE.CHANGE_VALUE) {
      return next(action);
    }

    const query = {
      q: base64.encode(action.payload.value)
    };

    const scripts = getState().script.scripts;

    if (scripts.length > 0) {
      query.script = scripts.map((script) => script.url);
    }

    const queryString = stringify(query);

    history.push(`${ history.location.pathname }?${ queryString }`);

    return next(action);
  };
}
