import React, {useRef, useState} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import ForwardRefExample from './ComponentChildren/ForwardRefExample';


// const initialValue: number = 0

// export default function UseCallbackHook() {
export default function UseRefHook() {
    
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
            <header>
            <h1><small>use</small><span>Ref</span></h1>
                <nav>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
                    {/* <br /> */}
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
                    {/* <br /> */}
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
                </nav>
            </header>

            <main>
                <h2> {'>'} useRef provides us with a way to refer to data which persists between re-renders <em className={hookStyles.blueText}>without causing a re-render when changed</em></h2>
                <h3>This means that <em className={hookStyles.blueText}><strong>useRef is similar to useState</strong> but it also allows us to store a reference to a DOM element.</em></h3>
                <section>
                    <p>useRef returns a mutable object whose .current property is initialized to the passed argument.</p>
                    <p>We can useRef to keep track of data between renders which might not need to change very often if at all once initialized.</p>
                    <p>Since variables in React components are instanced and re-initialized on every render, useRef is one way React allows us to optimize our applications (see <a>useMemo</a> and <a>useCallback</a>).</p>
                    <p>Great for if there's lots of stateful chaining happening but a render shouldn't happen until it's finished.</p>
                    <p>useRef is a way to hold data 'in state' without directly causing a re-render when it changes</p>
                    <p>modifying the value of the reference by means of the current property does not produce a new render</p>
                    <p>Since useState should generally only be tied to variabled used by a UI element, we can useRef to have persistent data independent of the UI.</p>
                </section>
            <h2>useRef <em>'hello world'</em>:</h2>
            <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    const ref = React.useRef(<DEFAULT_VALUE>)

`}
            </SyntaxHighlighter>
            {/* <hr />

                <ul>
                    <li className={hookStyles.listTitle}><strong>useRef is great for:</strong></li>
                    <li>Accessing DOM elements imperatively. See the examble below to understand how we can use a button to set focus on an input field.</li>
                    
                </ul>
            <hr />

                <ul>
                    <li className={hookStyles.listTitle}><strong>Common mistakes:</strong></li>
                    <li><span className={hookStyles.redText}>Causing an infinite loop</span> by updating state within the callback function and <span className={hookStyles.redText}>forgetting to include a dependency array.</span></li>
                    <li><span className={hookStyles.redText}>Returning</span> <span className={hookStyles.lightText}>(something other than a cleanup function)</span> directly. </li>
                    <li><span className={hookStyles.redText}>Causing an infinite loop</span> by updating state within the callback function and <span className={hookStyles.redText}>populating the dependency array with that same state.</span></li>
                    <li><span className={hookStyles.redText}><em>Relying</em> on data fetched within the callback to create a user interface.</span> It's common to fetch data, store it in state, and then map over that state to create a dynamic user interface - but <span className={hookStyles.blueText}>a check must be performed to ensure the component doesn't break if the fetch within the useEffect callback doesn't deliver the expected data.</span> This is commonly done with a simple && conditional operator, or a ternary.</li>
                    <li>Calling functions <span className={hookStyles.redText}><em>that aren't declared within the effect itself</em></span> and which aren't pure computations.</li>
                    <li>common mistake: using state instead of ref.</li>
                    <li>setting the state to the same value it already is renders it an idempotent operation.</li>
                </ul> */}

            </main>

            <hr />
            <section className={hookStyles.exampleSection}>
            <h2>Concrete examples:</h2>
            <strong>Storing persistant data which doesn't trigger a re-render when its changed:</strong>
                <section className={hookStyles.codeExampleText}>
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
{
`
let initialValue: number = 0
const refContainer = useRef(initialValue);
const [numberState, setNumberState] = useState<number>(0)

<button onClick={() => refContainer.current = refContainer.current + 1}>increase number</button>
<button onClick={() => setNumberState(numberState + refContainer.current)}>increase state with ref</button>
<p>refContainer.current: {refContainer.current}</p>
<p>numberState: {numberState}</p>
<p>we can access the current value of the reference within the .current property.</p>

`
}            
</SyntaxHighlighter>

            
            
            <hr />
            <strong>Accessing a DOM node imperatively:</strong>
            <section className={hookStyles.codeExampleText}>    
                <p>Clicking the button sets focus onto the input field using a reference.</p>
                <div className={hookStyles.flexDesktopRowMobileColumn}>
                    <input ref={inputField} type="text" />
                    <button onClick={onButtonClick}>Focus the input</button>
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




    {/* <h2>forwardRef</h2> */}
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
    {/* <strong>Accessing a DOM node imperatively:</strong> */}
    <section className={hookStyles.exampleSection}>
        <section className={hookStyles.codeExampleText}>    
            {/* <p>Clicking the button sets focus onto the input field using a reference.</p> */}
            <p>Value which both textareas change: {value}</p>
            <div className={hookStyles.textAreaContainer}>
                
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
            <div className={hookStyles.flexDesktopRowMobileColumn}>
                <button onClick={() => inputRef.current && inputRef.current.focus()}>Focus Forward Ref Example Input</button>
                <button onClick={() => inputRef.current && inputRefTA.current.focus()}>FocusTextArea</button>
            </div>
        </section>
    </section>
        
    <br />
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

`
}            
</SyntaxHighlighter>

<p>Our ForwardRefExample component can now use the ref, so long as it is exported with .forwardRef({'<'}COMPONENT_NAME{'>'})</p>
<SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax}>
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
<hr />



        </div>
    )
}