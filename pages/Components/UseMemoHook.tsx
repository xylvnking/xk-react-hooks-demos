import React, {useEffect, useState, useMemo} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// type Props = {}

export default function UseMemoHook() {

    const [triggerRender, toggleTriggerRender] = useState<boolean>(false)
    const [nonMemorizedValue, setNonMemorizedValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0);
    const [howManyTimesMemorizedValueHasBeenCalculated, setHowManyTimesMemorizedValueHasBeenCalculated] = useState<number>(0)
    const memorizedValue = useMemo(() => computeExpensiveValue(count), [count]);

    function computeExpensiveValue (valueOne: number) {
        setHowManyTimesMemorizedValueHasBeenCalculated(howManyTimesMemorizedValueHasBeenCalculated + 1)
        for (let i = 0; i < 10000; i++) {
            valueOne += 1;
        }
        return valueOne;
    }
    
    return (
        <div className={hookStyles.container}>
            <h1>useMemo</h1>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
            <br />
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
            <p>useEffect provides us with more control over when code is executed independent of re-renders.</p>
            <p>useMemo is akin to a useEffect with a return value.</p>
            <p>useMemo does not guarantee that it will not fire if dependencies have not changed. Code should not rely on useMemo's functionality, instead considering it as a performance optimization</p>
            <p>useMemo allows us to avoid expensive calculations, usually.</p>

            <p>memorized value: {memorizedValue}</p>
            <p>non-memorized value: {nonMemorizedValue}</p>
            <p>count: {count}</p>
            <p>how many times the memorized value has been calculated: {howManyTimesMemorizedValueHasBeenCalculated}</p>
            <button onClick={() => setNonMemorizedValue(nonMemorizedValue + 1)}>increase non-memorized value, which doesn't recalculate</button>
            <button onClick={() => setCount(count + 1)}>increase count (recalculates the useMemo value)</button>
            <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render component (won't recalculate value)</button>
            
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
            <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax}>
                {
`
export default function UseMemoHook() {

    const [triggerRender, toggleTriggerRender] = useState<boolean>(false)
    const [nonMemorizedValue, setNonMemorizedValue] = useState<number>(0)
    const [count, setCount] = useState<number>(0);
    const [howManyTimesMemorizedValueHasBeenCalculated, setHowManyTimesMemorizedValueHasBeenCalculated] = useState<number>(0)
    const memorizedValue = useMemo(() => computeExpensiveValue(count), [count]);
    function computeExpensiveValue (valueOne: number) {
        setHowManyTimesMemorizedValueHasBeenCalculated(howManyTimesMemorizedValueHasBeenCalculated + 1)
        for (let i = 0; i < 10000; i++) {
            valueOne += 1;
        }
        return valueOne;
    }
    return (
        <p>memorized value: {memorizedValue}</p>
        <p>non-memorized value: {nonMemorizedValue}</p>
        <p>count: {count}</p>
        <p>how many times the memorized value has been calculated: {howManyTimesMemorizedValueHasBeenCalculated}</p>
        <button onClick={() => setNonMemorizedValue(nonMemorizedValue + 1)}>increase non-memorized value, which doesn't recalculate</button>
        <button onClick={() => setCount(count + 1)}>increase count (recalculates the useMemo value)</button>
        <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render component (won't recalculate value)</button>
    )
}

`
                }
            </SyntaxHighlighter>
            
            {/* <script src="https://gist.github.com/xylvnking/455c32bd7017d54f6d9016c1d583ef28.js"></script> */}
        </div>
    )
}