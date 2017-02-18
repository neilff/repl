const createAction = (type, payload = {}, meta = {}) => ({ type, payload, meta });

export default createAction;