# unimpl

- `todo()` and `unimpl()` functions inspired by Rust [`todo!()`][todo] and [`unimplemented!()`][unimpl] macros
- Can develop a project without type check errors

[todo]: https://doc.rust-lang.org/std/macro.todo.html
[unimpl]: https://doc.rust-lang.org/std/macro.unimplemented.html

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
    return unimpl(); // Throws an error 'Not implemented'
  }
}
```
