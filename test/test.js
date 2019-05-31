const test = require('tape');
const {
  errJson,
  errJsonDebug,
} = require('..');

test('test errJson(err)', t => {
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

test('test errJson(123)', t => {
  t.plan(1);

  const json = errJson(123);

  t.deepEqual(json, {
    name: 'Error',
    message: 'The err must be an instance of Error',
    code: undefined,
    err: 123,
  });
});

test('test errJsonDebug(err)', t => {
  t.plan(4);

  const err = new Error('test');
  err.foo = 'foo';

  const json = errJsonDebug(err);

  t.equal(json.name, 'Error');
  t.equal(json.message, 'test');
  t.equal(json.foo, 'foo');
  t.equal(typeof(json.stack), 'string');
});

test('test errJsonDebug(123)', t => {
  t.plan(4);

  const json = errJsonDebug(123);

  t.equal(json.name, 'Error');
  t.equal(json.message, 'The err must be an instance of Error');
  t.equal(json.err, 123);
  t.equal(typeof(json.stack), 'string');
});

test('test errJsonDebug(err, true)', t => {
  t.plan(4);

  const err = new Error('test');
  err.foo = 'foo';

  const json = errJsonDebug(err, true);

  t.equal(json.name, 'Error');
  t.equal(json.message, 'test');
  t.equal(json.foo, 'foo');
  t.ok(Array.isArray(json.stack));
});

test('test errJsonDebug(123, true)', t => {
  t.plan(4);

  const json = errJsonDebug(123, true);

  t.equal(json.name, 'Error');
  t.equal(json.message, 'The err must be an instance of Error');
  t.equal(json.err, 123);
  t.ok(Array.isArray(json.stack));
});
