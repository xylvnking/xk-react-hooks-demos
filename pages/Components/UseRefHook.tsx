import React, {useRef, useState} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ForwardRefExample from './ComponentChildren/ForwardRefExample';


// const initialValue: number = 0

export default function UseCallbackHook() {
    
    let initialValue: number = 0
    const refContainer = useRef(initialValue);
    const [numberState, setNumberState] = useState<number>(0)

    const inputField = useRef<HTMLInputElement>(null);
    
    const onButtonClick = () => {
        if (inputField.current) {
            inputField.current.focus();
        }
    };

    // for useImperativeHandle
    const [value, setValue] = useState('red')
    const inputRef = useRef<HTMLInputElement>()
    const inputRefTA = useRef<any>() // why doesn't the 'HTMLTextAreaElement' type work here?
    
    // const inputRefTA = useRef<HTMLDivElement>()
    
    return (
        <div className={hookStyles.container}>
            <h1>useRef and forwardRef</h1>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
            <br />
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
            <br />
            <hr />
            <strong>useRef can be used to keep a value 'in state' without directly causing the DOM to rerender</strong>
            <p>useRef is similar to useState, except that it returns a mutable object instead of just the value it was initialized with.</p>
            <SyntaxHighlighter language="javascript" style={nightOwl}>
{
`
let initialValue: number = 0
const refContainer = useRef(initialValue);
const [numberState, setNumberState] = useState<number>(0)
`
}            
</SyntaxHighlighter>
            
<SyntaxHighlighter language="javascript" style={nightOwl}>
{
`
<button onClick={() => refContainer.current = refContainer.current + 1}>increase number</button>
<button onClick={() => setNumberState(numberState + refContainer.current)}>increase state with ref</button>
<p>refContainer.current: {refContainer.current}</p>
<p>numberState: {numberState}</p>
<p>we can access the current value of the reference within the .current property.</p>

`
}            
</SyntaxHighlighter>

            <button onClick={() => refContainer.current = refContainer.current + 1}>increase number</button>
            <button onClick={() => setNumberState(numberState + refContainer.current)}>increase state with ref</button>
            <p>refContainer.current: {refContainer.current}</p>
            <p>numberState: {numberState}</p>
            <p>we can access the current value of the reference within the .current property.</p>
            <hr />
            <strong>useRef is often used to access a DOM node imperatively</strong>
<SyntaxHighlighter language="javascript" style={nightOwl}>
{
`
function TextInputWithFocusButton() {
    const inputField = useRef<HTMLInputElement>(null);
    const onButtonClick = () => {
        if (inputField.current) {
            inputField.current.focus();
        }
    };
    return (
      <>
        <input ref={inputField} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );
  }
    
`
}
</SyntaxHighlighter>
    <>
        <input ref={inputField} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
    </>
            
            
<hr/>




    <h2>forwardRef</h2>
    <p>forward ref allows us to pass a reference into a child component</p>
    <p>the following component receives a reference which allows the button on the parent component to select it</p>
    <p>here we store the value of our fields in state, and set references to them</p>
<SyntaxHighlighter language="javascript" style={nightOwl}>
{
`
// UseRefHook.tsx
const [value, setValue] = useState('red')
const inputRef = useRef<HTMLInputElement>()
const inputRefTA = useRef<any>() // why doesn't the 'HTMLTextAreaElement' type work here?

`
}            
</SyntaxHighlighter>

<hr />
<p>then we create jsx to manipulate the data</p>
<SyntaxHighlighter language="javascript" style={nightOwl}>
{
`
// UseRefHook.tsx
<ForwardRefExample 
    ref={inputRef}
    value={value}
    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
/>
<textarea
    ref={inputRefTA}
    value={value}
    onChange={(e: React.ChangeEvent<any>) => setValue(e.target.value)}
/>
<button onClick={() => inputRef.current && inputRef.current.focus()}>Focus Forward Ref Example Input</button>
<button onClick={() => inputRef.current && inputRefTA.current.focus()}>FocusTextArea</button>

`
}            
</SyntaxHighlighter>

<p>Our ForwardRefExample component can now use the ref, so long as it is exported with .forwardRef({'<'}COMPONENT_NAME{'>'})</p>
<SyntaxHighlighter language="javascript" style={nightOwl}>
{
`
// ForwardRefExample.tsx
function ForwardRefExample(props:any, ref:any) {
    return (
        <input
            ref={ref}
            {...props}
        />
    )
}
    
export default React.forwardRef(ForwardRefExample)
`
}            
</SyntaxHighlighter>
    <ForwardRefExample 
        ref={inputRef}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        />
    <textarea
        ref={inputRefTA}
        value={value}
        onChange={(e: React.ChangeEvent<any>) => setValue(e.target.value)}
        />
        
    <br />
    <button onClick={() => inputRef.current && inputRef.current.focus()}>Focus Forward Ref Example Input</button>
      
    <button onClick={() => inputRef.current && inputRefTA.current.focus()}>FocusTextArea</button>

            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>

            {/* <script src="https://gist.github.com/xylvnking/455c32bd7017d54f6d9016c1d583ef28.js"></script> */}
        </div>
    )
}