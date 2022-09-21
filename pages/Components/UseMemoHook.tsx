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
            
            <header>
                <h1><small>use</small><span>Memo</span></h1>
                <nav>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
                </nav>
            </header>
            <main>
                <section>
                    <h2> {'>'} useMemo memorizes a value <strong>to create a <em className={hookStyles.blueText}>memoized</em> value </strong>which isn't calculated on every render, unless the values within the dependency array change</h2>
                    <h3>useMemo does not guarantee this absolutely, <strong><em className={hookStyles.blueText}>so it's used to optimizate performance, not to provide critical functionality which makes or breaks the application.</em></strong></h3>
                    <ul>
                        <li>useMemo is similar to useCallback except it returns a value, not the function itself.</li>
                        <li>useMemo does not guarantee that it will not fire if dependencies have not changed. Code should not rely on useMemo's functionality, instead considering it as a performance optimization</li>
                        <li>useMemo allows us to avoid expensive calculations, usually.</li>
                        <li>If no values are provided to the dependency array, the value of useMemo will be calculated on every render.</li>
                        <li>Every value referenced inside the function should also appear in the dependencies array.</li>
                        <li>Think of useMemo like a cache, where the dependencies are the cash invalidation strategy.</li>
                    </ul>
                </section>
                <h2>useMemo <em>'hello world'</em>:</h2>
                <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

`}
                </SyntaxHighlighter>
            </main>

            <hr />

            <section className={hookStyles.exampleSection}>
            <h2>A concrete example:</h2>
                <section >
                    <p>memorized value: {memorizedValue}</p>
                    <p>non-memorized value: {nonMemorizedValue}</p>
                    <p>count: {count}</p>
                    <p>how many times the memorized value has been calculated: {howManyTimesMemorizedValueHasBeenCalculated}</p>
                    <div className={hookStyles.flexDesktopRowMobileColumn}>
                        <button onClick={() => setNonMemorizedValue(nonMemorizedValue + 1)}>increase non-memorized value, which doesn't recalculate</button>
                        <button onClick={() => setCount(count + 1)}>increase count (recalculates the useMemo value)</button>
                        <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render component (won't recalculate value)</button>
                    </div>
                </section>
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
            </section>
            
            {/* <script src="https://gist.github.com/xylvnking/455c32bd7017d54f6d9016c1d583ef28.js"></script> */}
        </div>
    )
}