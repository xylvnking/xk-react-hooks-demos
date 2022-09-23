# to do:

fix links

# Using React Hooks with TypeScript

<h2> > This is a forever-on-going reference guide to working with React hooks. I started this because I kept forgetting small things and wanted a quick reference online in my own language.</h2>
<h3>I'd like to include other topics about React over time. There's some custom hooks like useSound and the firebase hooks which are great. When I started this reference guide I had mostly only used useState and useEffect, so learning thr others throughout this process was a great experience.</h3>
<h3>I used TypeScript for this project and the examples. I'm not an expert with TypeScript by any means, but I figured I'd do my best. If you notice anything I could do better please do let me know! Or just make a pull request, the code is all right here with each hook having its own component.</h3>
<h4>If you're a recruiter or hiring manager or somebody else with a work opportunity reading this, it means I'm actively looking for work. I'd love to hear from you and have a conversation :)</h4>

<br />

# Troublesome error I ran into

Importing code syntax highlighter cause an issue related to an export.

> SyntaxError: Unexpected token 'export'

This was solved by changing the module to lead synchronously (CJS) instead of asynchronously (ESM)

```js
// import code which gave the error
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import code which works without error
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
```

## Relevant links

[great article on useCallback vs useMemo](kentcdodds.com/blog/usememo-and-usecallback)

[useEffect vs useLayoutEffect](https://blog.saeloun.com/2022/07/28/difference-between-useeffect-and-useeffectlayout-hooks)

[amazing example how how to make effects self-sufficient](https://overreacted.io/a-complete-guide-to-useeffect/#making-effects-self-sufficient)

[using a script tag within nextjs with server side rendering and iframe](https://annacoding.com/article/5U6rDjIdpagTONVmbssSSn)

[React won’t try to “match up” elements with the same keys between different parents](https://overreacted.io/react-as-a-ui-runtime/#lists)
