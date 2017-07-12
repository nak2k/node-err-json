const errJson = err => (
  {
    name: err.name,
    message: err.message,
    code: err.code,
  }
);

const errJsonDebug = (err, split = false) => (
  {
    name: err.name,
    message: err.message,
    code: err.code,
    stack: split ? err.stack.spilt('\n') : err.stack,
  }
);

exports.errJson = errJson;
exports.errJsonDebug = errJsonDebug;
