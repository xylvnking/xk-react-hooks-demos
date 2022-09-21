import React, {useEffect, useState} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
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


    // infinite loop hello world example
    // const [state, setState] = useState(0);
    // useEffect(() => {setState(state + 1)})


    return (
        <div className={hookStyles.container}>
            <header>
                <h1><small>use</small><span>Effect</span></h1>
                <nav>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
                    {/* <br /> */}
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
                    {/* <br /> */}
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
                </nav>
            </header>
            <main>
                <h2> {'>'} useEffect designates a 'side effect' of the initial render</h2>
                <h3>This means that <strong>useEffect fires off the code within the callback function <em className={hookStyles.blueText}>after</em> the component is rendered</strong> && <strong>does <em className={hookStyles.blueText}>not</em> block browser painting.</strong></h3>
                <section>
                    <ul>
                        <li>useEffect is one of the most common React Hooks. We primarily use it to run blocks of code which are important to the application, but shouldn't block the initial page render.</li>
                        <li>It runs its provided <em className={hookStyles.blueText}>callback function</em> on every render by default, but by including a <em className={hookStyles.blueText}>dependency array</em> we are given control over this behaviour. Providing an empty dependency array as the second argument states that the effect doesn't use any value that participates in the React data flow.</li>
                        <li>When we provide a value for the dependency array, we're stating that the effect is relevant to the data flow and that the callback should be fired off to maintain synchronization. If the value within the dependency array hasn't changed since the last render, we're telling React that it can skip the effect because the data is already in sync.</li>
                        <li>Since setting state won't trigger a re-render if the value is the same, we're 'safe' to set state within a useEffect but useCaution to avoid situations like those listed below.</li>
                        <li>The <em className={hookStyles.blueText}><strong>cleanup function</strong></em> runs when the component is unmounted. A common use is to cancel setting state if it was unmounted during data fetching.</li>
                        <li>In general, effects should minimize the number of dependencies and be strict about including them.</li>
                        <li>It can be helpful to create a mental model of effects by thinking of them as <em className={hookStyles.blueText}>synchronization</em> instead of as <em className={hookStyles.redText}>triggers</em>.</li>
                    </ul>
                </section>
                <h2>useEffect <em>'hello world'</em>:</h2>
                <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    useEffect(() => {
        // do thing
        return () => {
        // handle what happens when you stop doing thing
        }
    }, [/*dependency array*/]) //whatever is here will trigger a render when it changes

`}
                </SyntaxHighlighter>

                <hr />

                <ul>
                    <li className={hookStyles.listTitle}><strong>useEffect is great for:</strong></li>
                    <li>Fetching data from an external API</li>
                    <li>Sending analytics data to an external API</li>
                    <li>When a component populates its local state with data it receives via props</li>
                    <li>Most cases where you would have used <em className={hookStyles.blueText}>componentDidMount</em> or <em className={hookStyles.blueText}>componentDidUpdate</em></li>
                    <li>Synchronizing our component with data being delivered to it from any external source.</li>
                    {/* <li>Directly updating the DOM. </li> */}
                    {/* <li>Timers</li> */}
                </ul>

                <hr />

                <ul>
                    <li className={hookStyles.listTitle}><strong>Common mistakes:</strong></li>
                    <li><span className={hookStyles.redText}>Causing an infinite loop</span> by updating state within the callback function and <span className={hookStyles.redText}>forgetting to include a dependency array.</span></li>
                    <li><span className={hookStyles.redText}>Returning</span> <span className={hookStyles.lightText}>(something other than a cleanup function)</span> directly. </li>
                    <li><span className={hookStyles.redText}>Causing an infinite loop</span> by updating state within the callback function and <span className={hookStyles.redText}>populating the dependency array with that same state.</span></li>
                    <li><span className={hookStyles.redText}><em>Relying</em> on data fetched within the callback to create a user interface.</span> It's common to fetch data, store it in state, and then map over that state to create a dynamic user interface - but <span className={hookStyles.blueText}>a check must be performed to ensure the component doesn't break if the fetch within the useEffect callback doesn't deliver the expected data.</span> This is commonly done with a simple && conditional operator, or a ternary.</li>
                    <li>Calling functions <span className={hookStyles.redText}><em>that aren't declared within the effect itself</em></span> and which aren't pure computations.</li>
                </ul>
                <small><em><strong>PS</strong> - useLayoutEffect is useEffect except it blocks the initial render, and is useful for visual elements like modals</em></small>
            </main>

            <hr />

            <section className={hookStyles.exampleSection}>
                <h2>A concrete example:</h2>
                <section >
                
                        <p>value in the dependency array: {valueInDependencyArray}</p>
                        <p>value which does not trigger useEffect: {valueWhichDoesNotTriggerUseEffect}</p>
                        <p>number incremented within useEffect: {numberIncrementedWithinUseEffect}</p>
                    <div className={hookStyles.flexDesktopRowMobileColumn}>
                        <button onClick={() => setValueWhichDoesNotTriggerUseEffect(valueWhichDoesNotTriggerUseEffect + 1)}>increment value which does not trigger useEffect</button>
                        <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render entire component</button>
                        <button onClick={() => setValueInDependencyArray(valueInDependencyArray + 1)}>update value in dependency array</button>
                    </div>
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

        return (
            <p>value in the dependency array: {valueInDependencyArray}</p>
            <p>value which does not trigger useEffect: {valueWhichDoesNotTriggerUseEffect}</p>
            <p>number incremented within useEffect: {numberIncrementedWithinUseEffect}</p>
            <button onClick={() => setValueWhichDoesNotTriggerUseEffect(valueWhichDoesNotTriggerUseEffect + 1)}>valueWhichDoesNotTriggerUseEffect</button>
            <button onClick={() => toggleTriggerRender(!triggerRender)}>re-render component</button>
            <button onClick={() => setValueInDependencyArray(valueInDependencyArray + 1)}>update value in dependency array</button>
        )
    }


    `}
                </SyntaxHighlighter>
            </section>
        </div>
    )
}