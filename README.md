# err-json

Convert Error to JSON.

## Installation

```
npm i err-json -S
```

## Usage

``` javascript
const {
  errJson,
  errJsonDebug,
} = require('err-json');

const json1 = errJson(err);

const json2 = errJson(err, true);
```

## errJson(err)

Returns an object with the following properties:

- `name`
    - A name of the error.
- `message`
    - Error message.
- `code`
    - Error code.

## errJsonDebug(err, split = false)

Returns an object with the following properties:

- `name`
    - A name of the error.
- `message`
    - Error message.
- `code`
    - Error code.
- `stack`
    - Stack trace.
    - If the argument `split` is true, it is returned as an array.

## License

MIT
