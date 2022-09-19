import React, {useEffect, useState} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// type Props = {}

export default function UseEffectHook() {

    const [valueInDependencyArray, setValueInDependencyArray] = useState<number>(0)
    const [numberIncrementedWithinUseEffect, setNumberIncrementedWithinUseEffect] = useState<number>(0)
    const [triggerRender, toggleTriggerRender] = useState<boolean>(false)
    const [valueWhichDoesNotTriggerUseEffect, setValueWhichDoesNotTriggerUseEffect] = useState<number>(0)

    useEffect(() => {
        setNumberIncrementedWithinUseEffect(numberIncrementedWithinUseEffect + 1)
    },[valueInDependencyArray])





    return (
        <div className={hookStyles.container}>
            <h1>use<span>Effect</span></h1>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
            <br />
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
            <br />
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>

            <h2> {'>'} useEffect provides us with more control over when code is executed independent of re-renders</h2>
            <ul>
                <li>What this means is that code inside of a useEffect can be made to run every re-render, only when the component initially loads (or in removed), or according to when a specific value changes.</li>
                <li>useEffect is the functional component replacement for componentDidMount and componentDidUpdate.</li>
                <li>useEffect is commonly causes problems for beginners who create inifinite loop by assing in a function which updates the piece of state on which the effect is dependent.</li>
                <li>useEffect takes a callback function to be executed, and a dependency array to dictate when that function is executed. If there is no array, the function is called on every render. If there is an empty array the function is called only once when the component is mounted. If there are any values within the array, the function will call when the component loads as well as whenever the value within the dependency array changes.</li>
            </ul>
            <hr />

            <h2>The basic structure of most useEffects is as follows:</h2>
            <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    useEffect(() => {
        // do thing
        return () => {
        // handle what happens when you stop doing thing
        };
    }, [/*dependency array*/]); //whatever is here will trigger a render when it changes

`}
</SyntaxHighlighter>
<section className={hookStyles.exampleSection}>
    <h2>A concrete example:</h2>
    <section>
        <p>valueInDependencyArray: {valueInDependencyArray}</p>
        <p>valueWhichDoesNotTriggerUseEffect: {valueWhichDoesNotTriggerUseEffect}</p>
        <p>number which is incremented whenever useEffect is triggered: {numberIncrementedWithinUseEffect}</p>
        {/* <p>regular let variable: {anotherNumber}</p> */}
        <button onClick={() => setValueWhichDoesNotTriggerUseEffect(valueWhichDoesNotTriggerUseEffect + 1)}>valueWhichDoesNotTriggerUseEffect</button>
        <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render component</button>
        <button onClick={() => setValueInDependencyArray(valueInDependencyArray + 1)}>update value in dependency array</button>
    </section>
                



    
    <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
    {`
    export default function UseEffectHook() {
        // first let's create some pieces of state to work with

        // this number value will trigger the dependency array in our useEffect and will be controlled by a button
        const [valueInDependencyArray, setValueInDependencyArray] = useState<number>(0)

        // this number value will be incremented anytime the useEffect fires and will be shown on screen
        const [numberIncrementedWithinUseEffect, setNumberIncrementedWithinUseEffect] = useState<number>(0)

        // this piece of state will trigger a re-render of the component as a whole and will be controlled by a button
        const [triggerRender, toggleTriggerRender] = useState<boolean>(false)

        // this number value will not trigger the useEffect, and will be represented by a button which increments it
        const [valueWhichDoesNotTriggerUseEffect, setValueWhichDoesNotTriggerUseEffect] = useState<number>(0)

        //then let's create the useEffect itself:

        useEffect(() => {
            setNumberIncrementedWithinUseEffect(numberIncrementedWithinUseEffect + 1)
        },[valueInDependencyArray])

        // then let's create the buttons to add the neccessary functionality

        return (
            <button onClick={() => setValueWhichDoesNotTriggerUseEffect(valueWhichDoesNotTriggerUseEffect + 1)}>valueWhichDoesNotTriggerUseEffect</button>
            <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render component</button>
            <button onClick={() => setValueInDependencyArray(valueInDependencyArray + 1)}>update value in dependency array</button>
        )
    }


    `}
    </SyntaxHighlighter>
</section>



            <h3></h3>
            {/* <section className={hookStyles.exampleContainer}>
                <p>valueInDependencyArray: {valueInDependencyArray}</p>
                <p>valueWhichDoesNotTriggerUseEffect: {valueWhichDoesNotTriggerUseEffect}</p>
                <p>number which is incremented whenever useEffect is triggered: {numberIncrementedWithinUseEffect}</p>
                
                <button onClick={() => setValueWhichDoesNotTriggerUseEffect(valueWhichDoesNotTriggerUseEffect + 1)}>valueWhichDoesNotTriggerUseEffect</button>
                <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render component</button>
                <button onClick={() => setValueInDependencyArray(valueInDependencyArray + 1)}>update value in dependency array</button>
            </section> */}

{/* 
            <details>
                <summary>useLayoutEffect:</summary>
                <p><strong>useLayoutEffect</strong> works the same way, except that it fires synchronously once DOM manipulations are complete, earlier than useEffect, and blocks rendering until it completes.</p>
                <p>useLayoutEffect is used when we're manipulating the DOM according to information which can only be gathered after the initial DOM manipulation has completed.</p>
                <p>For example if we want a modal to pop up at the position of a button, using useLayoutEffect ensures that the modal won't first appear somewhere else and then jump to the correct position.</p>
            </details> */}

            {/* <p>valueInDependencyArray: {valueInDependencyArray}</p>
            <p>valueWhichDoesNotTriggerUseEffect: {valueWhichDoesNotTriggerUseEffect}</p>
            <p>number which is incremented whenever useEffect is triggered: {numberIncrementedWithinUseEffect}</p>
            
            <button onClick={() => setValueWhichDoesNotTriggerUseEffect(valueWhichDoesNotTriggerUseEffect + 1)}>valueWhichDoesNotTriggerUseEffect</button>
            <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render component</button>
            <button onClick={() => setValueInDependencyArray(valueInDependencyArray + 1)}>update value in dependency array</button>
             */}



            

            
            {/* <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', flex: 1}}>

                {
`
export default function UseEffectHook() {
    const [valueInDependencyArray, setValueInDependencyArray] = useState<number>(0)
    const [numberIncrementedWithinUseEffect, setNumberIncrementedWithinUseEffect] = useState<number>(0)
    const [triggerRender, toggleTriggerRender] = useState<boolean>(false)
    const [valueWhichDoesNotTriggerUseEffect, setValueWhichDoesNotTriggerUseEffect] = useState<number>(0)

    useEffect(() => {
        setNumberIncrementedWithinUseEffect(numberIncrementedWithinUseEffect + 1)
    },[valueInDependencyArray])

    return (
        <button onClick={() => setValueWhichDoesNotTriggerUseEffect(valueWhichDoesNotTriggerUseEffect + 1)}>valueWhichDoesNotTriggerUseEffect</button>
        <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render component</button>
        <button onClick={() => setValueInDependencyArray(valueInDependencyArray + 1)}>update value in dependency array</button>
    )}`
                }
            
            </SyntaxHighlighter> */}
            
            {/* <script src="https://gist.github.com/xylvnking/455c32bd7017d54f6d9016c1d583ef28.js"></script> */}
        </div>
    )
}