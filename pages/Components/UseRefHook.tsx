import React, {useRef, useState, useEffect} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ForwardRefExample from './ComponentChildren/ForwardRefExample';
import { useRouter } from 'next/router'
import { NoFallbackError } from 'next/dist/server/base-server';


// const initialValue: number = 0

// export default function UseCallbackHook() {
export default function UseRefHook() {
    const router = useRouter()
    
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
    const [value, setValue] = useState('hey whatsup this is a value')
    const inputRef = useRef<HTMLInputElement>()
    const inputRefTA = useRef<any>() // why doesn't the 'HTMLTextAreaElement' type work here?
    
    // const inputRefTA = useRef<HTMLDivElement>()
    useEffect(() => {
        router.push('/?hook=useRef', undefined, { shallow: true })
    }, [])
    
    return (
        <div className={hookStyles.container}>
            <header>
            <h1><small>use</small><span>Ref</span></h1>
                <nav>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
                </nav>
            </header>
            <main>
                <h2> {'>'} useRef provides us with a way to refer to data which persists between re-renders <em className={hookStyles.blueText}>without causing a re-render when changed</em></h2>
                <h3>This means that <em className={hookStyles.blueText}><strong>useRef is similar to useState</strong> but it also allows us to store a reference to a DOM element.</em></h3>
                <section>
                    <ul>
                        <li>useRef returns a mutable object whose .current property is initialized to the passed argument.</li>
                        <li>We can useRef to keep track of data between renders which might not need to change very often if at all once initialized.</li>
                        <li>Since variables in React components are instanced and re-initialized on every render, useRef is one way React allows us to optimize our applications (see <a>useMemo</a> and <a>useCallback</a>).</li>
                        <li>Great for if there's lots of stateful chaining happening but a render shouldn't happen until it's finished.</li>
                        <li>useRef is a way to hold data 'in state' without directly causing a re-render when it changes</li>
                        <li>modifying the value of the reference by means of the current property does not produce a new render</li>
                        <li>Since useState should generally only be tied to variabled used by a UI element, we can useRef to have persistent data independent of the UI.</li>
                    </ul>
                </section>
            <h2>useRef <em>'hello world'</em>:</h2>
            <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    const ref = React.useRef(<DEFAULT_VALUE>)

`}
            </SyntaxHighlighter>
            </main>
            <hr />
            <section className={hookStyles.exampleSection}>
                <h2>Concrete examples:</h2>
                <strong>Storing persistant data which doesn't trigger a re-render when its changed:</strong>
                <section>
                    <p>value held in state: </p>
                    <p>number not held in state:</p>
                    <p>refContainer.current: {refContainer.current}</p>
                    <p>numberState: {numberState}</p>
                    <p>we can access the current value of the reference within the .current property.</p>
                    <div className={hookStyles.flexDesktopRowMobileColumn}>
                    <button onClick={() => refContainer.current = refContainer.current + 1}>increase number</button>
                    <button onClick={() => setNumberState(numberState + refContainer.current)}>increase state with ref</button>
                    </div>
                </section>
<SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax}>
{`
let initialValue: number = 0
const refContainer = useRef(initialValue);
const [numberState, setNumberState] = useState<number>(0)

<button onClick={() => refContainer.current = refContainer.current + 1}>increase number</button>
<button onClick={() => setNumberState(numberState + refContainer.current)}>increase state with ref</button>
<p>refContainer.current: {refContainer.current}</p>
<p>numberState: {numberState}</p>
<p>we can access the current value of the reference within the .current property.</p>

`}            
</SyntaxHighlighter>           
                <hr />
                <h2>Accessing a DOM node imperatively:</h2>
                <section className={hookStyles.codeExampleText}>    
                    <h3>Clicking the button sets focus onto the input field using a reference.</h3>
                    <div className={hookStyles.flexDesktopRowMobileColumn}>
                        <input ref={inputField} type="text" className={hookStyles.inputLikeButton} />
                        <button onClick={onButtonClick} >Focus the input</button>
                    </div>
                </section>
<SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax}>
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
            </section>   
            <hr/>
            <header>
                <h1><small>forward</small><span>Ref</span></h1>
                <nav>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
                </nav>
            </header>
            <h2> {'>'} forwardRef <em className={hookStyles.blueText}>allows us to pass a reference into a child component</em></h2>
            <h3>The following example shows us passing a reference to an input field down to a separate child component containing <em className={hookStyles.blueText}><strong>its own input field which now drives the original</strong></em></h3>
            <hr />
            <section className={hookStyles.exampleSection}>
                <section>    
                    <p><strong>Value which both textareas change:</strong> {value}</p>
                    <div className={hookStyles.textAreaContainer} style={{alignItems: 'center'}}>
                        
                        <ForwardRefExample 
                            ref={inputRef}
                            value={value}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                            className={hookStyles.textAreaFromExample}
                        />
                        <textarea
                            ref={inputRefTA}
                            value={value}
                            onChange={(e: React.ChangeEvent<any>) => setValue(e.target.value)}
                            className={hookStyles.textAreaFromExample}
                        />
                    </div>
                    <div className={hookStyles.flexDesktopRowMobileColumn} style={{alignItems: 'center'}}>
                        <button className={hookStyles.forwardRefButtons} onClick={() => inputRef.current && inputRef.current.focus()}>Focus Forward Ref Example Input</button>
                        {/* <button className={hookStyles.forwardRefButtons} style={{width: '50%'}} onClick={() => inputRef.current && inputRef.current.focus()}>Focus Forward Ref Example Input</button> */}
                        {/* <button style={{width: '50%'}} onClick={() => inputRef.current && inputRefTA.current.focus()}>FocusTextArea</button> */}
                        <button className={hookStyles.forwardRefButtons} onClick={() => inputRef.current && inputRefTA.current.focus()}>FocusTextArea</button>
                    </div>
                </section>
            </section>
    <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax}>
{
`
// UseRefHook.tsx
export default function UseRefHook() {
    
    // here we store the value of our fields in state, and set references to them
    const [value, setValue] = useState('red')
    const inputRef = useRef<HTMLInputElement>()
    const inputRefTA = useRef<any>() // if anybody knows why 'HTMLTextAreaElement' doesn't work here, please let me know

    return (
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
    )
}

`}            
</SyntaxHighlighter>
<SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax}>
{`
// ForwardRefExample.tsx

// Our ForwardRefExample component can now use the ref, so long as it is exported with .forwardRef(COMPONENT_NAME)
function ForwardRefExample(props:any, ref:any) {
    return (
        <input
            ref={ref}
            {...props}
        />
    )
}
    
export default React.forwardRef(ForwardRefExample)
`}            
</SyntaxHighlighter>
            <button onClick={() => window.scrollTo({top: 100, behavior: 'smooth'})} className={hookStyles.scrollToTopButton}>^</button>
        </div>
    )
}