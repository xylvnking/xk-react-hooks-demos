import React, {useRef} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// const initialValue: number = 0

export default function UseCallbackHook() {
    
    const initialValue: number = 0
    const refContainer = useRef(initialValue);
    
    return (
        <div className={hookStyles.container}>
            <h1>useRef</h1>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
            <br />
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>

            <SyntaxHighlighter language="javascript" style={nightOwl}>
                {
`
const initialValue: number = 0
const refContainer = useRef(initialValue);
    
`
                }
            
            </SyntaxHighlighter>
            <p>useRef is similar to useState, except that it returns a mutable object instead of just the value it was initialized with.</p>
            <SyntaxHighlighter language="javascript" style={nightOwl}>
                
                {
`
<p>use ref current value: {refContainer.current}</p>

`
                }
                
            
            </SyntaxHighlighter>
            {/* <p>use ref current value: {refContainer.current}</p> */}
            <p>we can access the current value of the reference within the .current property.</p>
            <hr />
            <strong>useRef is often used to access a DOM node imperatively</strong>
            
            
<hr/>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
            <SyntaxHighlighter language="javascript" style={nightOwl}>
                {
`

    
`
                }
            
            </SyntaxHighlighter>
            
            {/* <script src="https://gist.github.com/xylvnking/455c32bd7017d54f6d9016c1d583ef28.js"></script> */}
        </div>
    )
}