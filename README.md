# unimpl

- TypeScript `todo()`, `unimplemented()` and `unreachable()` functions
- Inspired by Rust [`todo!()`][todo], [`unimplemented!()`][unimpl] and [`unreachable!()`][unreachable] macros
- Can develop a project without type check errors

[todo]: https://doc.rust-lang.org/std/macro.todo.html
[unimpl]: https://doc.rust-lang.org/std/macro.unimplemented.html
[unreachable]: https://doc.rust-lang.org/std/macro.unreachable.html

# Install

```sh
npm i unimpl
```

# Usage

```js
import { todo, unimpl } from 'unimpl';

function function1(): string {
  const needToImplement = true;
  if (needToImplement) {
    return todo(); // Throws an error 'Not yet implemented'
  }
}

function function2(): string {
  const needToImplement = true;
  if (needToImplement) {
    return unimplemented(); // Throws an error 'Not implemented'
  }
}

function function3(): string {
  const needToExit = true;
  if (needToExit) {
    return 'Exit function here';
  }
  return unreachable(); // Throws an error 'Internal error: entered unreachable code'
}
```
