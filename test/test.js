const test = require('tape');
const {
  errJson,
  errJsonDebug,
} = require('..');

test('test errJson()', t => {
  t.plan(1);

  const err = new Error('test');
  err.foo = 'foo';

  const json = errJson(err);

  t.deepEqual(json, {
    name: 'Error',
    message: 'test',
    code: undefined,
    foo: 'foo',
  });
});

test('test errJsonDebug()', t => {
  t.plan(4);

  const err = new Error('test');
  err.foo = 'foo';

  const json = errJsonDebug(err);

  t.equal(json.name, 'Error');
  t.equal(json.message, 'test');
  t.equal(json.foo, 'foo');
  t.equal(typeof(json.stack), 'string');
});
