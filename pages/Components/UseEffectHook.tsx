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
            <h1>useEffect</h1>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
            <br />
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
            <p>useEffect provides us with more control over when code is executed independent of re-renders.</p>
            <p>What this means is that code inside of a useEffect can be made to run every re-render, only when the component initially loads (or in removed), or according to when a specific value changes.</p>
            <p>useEffect is the functional component replacement for componentDidMount and componentDidUpdate.</p>
            <p>useEffect is commonly causes problems for beginners who create inifinite loop by assing in a function which updates the piece of state on which the effect is dependent.</p>
            <p>useEffect takes a callback function to be executed, and a dependency array to dictate when that function is executed. If there is no array, the function is called on every render. If there is an empty array the function is called only once when the component is mounted. If there are any values within the array, the function will call when the component loads as well as whenever the value within the dependency array changes.</p>

            <p>valueInDependencyArray: {valueInDependencyArray}</p>
            <p>valueWhichDoesNotTriggerUseEffect: {valueWhichDoesNotTriggerUseEffect}</p>
            <p>number which is incremented whenever useEffect is triggered: {numberIncrementedWithinUseEffect}</p>
            {/* <p>regular let variable: {anotherNumber}</p> */}
            <button onClick={() => setValueWhichDoesNotTriggerUseEffect(valueWhichDoesNotTriggerUseEffect + 1)}>valueWhichDoesNotTriggerUseEffect</button>
            <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render component</button>
            <button onClick={() => setValueInDependencyArray(valueInDependencyArray + 1)}>update value in dependency array</button>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>

            <SyntaxHighlighter language="javascript" style={nightOwl}>
                {/* {codeString} */}
            
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
            
            </SyntaxHighlighter>
            
            {/* <script src="https://gist.github.com/xylvnking/455c32bd7017d54f6d9016c1d583ef28.js"></script> */}
        </div>
    )
}