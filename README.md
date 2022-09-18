# learned
[using a script tag within nextjs with server side rendering and iframe](https://annacoding.com/article/5U6rDjIdpagTONVmbssSSn)

# bugs/errors SOLVED

Importing code syntax highlighter cause an issue related to an export.

> SyntaxError: Unexpected token 'export'

This was solved by changing the module to lead synchronously (CJS) instead of asynchronously (ESM)

```js
// import code which gave the error
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import code which works without error
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
```

[great article on useCallback vs useMemo](kentcdodds.com/blog/usememo-and-usecallback)