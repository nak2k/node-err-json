const errJson = err => (
  {
    name: err.name,
    message: err.message,
    code: err.code,
  }
);

const errJsonDebug = err => (
  {
    name: err.name,
    message: err.message,
    code: err.code,
    stack: err.stack,
  }
);

exports.errJson = errJson;
exports.errJsonDebug = errJsonDebug;
