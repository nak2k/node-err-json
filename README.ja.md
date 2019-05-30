# err-json

Error を JSON に変換する。

## Installation

```
npm i err-json
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

以下のプロパティを持つオブジェクトを返す。

- `name`
    - エラーの名前。
- `message`
    - エラーのメッセージ。
- `code`
    - エラーのコード。

## errJsonDebug(err, split = false)

以下のプロパティを持つオブジェクトを返す。

- `name`
    - エラーの名前。
- `message`
    - エラーのメッセージ。
- `code`
    - エラーのコード。
- `stack`
    - スタックトレース。
    - 引数 `split` が true なら、配列で返す。

## License

MIT
