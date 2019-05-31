function errJson(err) {
  if (!(err instanceof Error)) {
    const err2 = new Error('The err must be an instance of Error');
    err2.err = err;
    return errJson(err2);
  }

  return Object.assign({
    name: err.name,
    message: err.message,
    code: err.code,
  }, err);
}

function errJsonDebug(err, split = false) {
  if (!(err instanceof Error)) {
    const err2 = new Error('The err must be an instance of Error');
    err2.err = err;
    return errJsonDebug(err2, split);
  }

  return Object.assign({
    name: err.name,
    message: err.message,
    code: err.code,
    stack: split ? err.stack.split('\n') : err.stack,
  }, err);
}

exports.errJson = errJson;
exports.errJsonDebug = errJsonDebug;
