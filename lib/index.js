const errJson = err =>
  Object.assign({
    name: err.name,
    message: err.message,
    code: err.code,
  }, err);

const errJsonDebug = (err, split = false) =>
  Object.assign({
    name: err.name,
    message: err.message,
    code: err.code,
    stack: split ? err.stack.split('\n') : err.stack,
  }, err);

exports.errJson = errJson;
exports.errJsonDebug = errJsonDebug;
