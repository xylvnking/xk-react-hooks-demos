import React, {useState} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'



export default function UseStateHook() {

    const [numberToIncrease, setNumberToIncrease] = useState<number>(0)
    let numberNotHeldInState: number = 0

    const increaseBothNumbers = () => {
        setNumberToIncrease(numberToIncrease + 1)
        numberNotHeldInState = numberNotHeldInState + 1
    }

    return (
        <div className={hookStyles.container}>
            <header>
                <h1><small>use</small><span>State</span></h1>
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
                    <p>useState provides us with a value <em className={hookStyles.blueText}>'held in state'</em>, and a function to update it.</p>
                    <p>What this means is that the value won't change when the component re-renders.</p>
                    <p>useState is extremely useful for having responsive and dynamic user interfaces</p>
                    <p>state doesn't change over time, it's always the component being called again</p>
                </section>
            <h2>useState <em>'hello world'</em>:</h2>
            <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    const [state, setState] = React.useState(<DEFAULT_VALUE>)

`}
            </SyntaxHighlighter>

            <hr />

                <ul>
                    <li className={hookStyles.listTitle}><strong>useState is great for:</strong></li>
                    <li>Fetching data from an external API</li>
                    <li>Sending analytics data to an external API</li>
                    <li>When a component populates its local state with data it receives via props</li>
                    <li>Most cases where you would have used <em className={hookStyles.blueText}>componentDidMount</em> or <em className={hookStyles.blueText}>componentDidUpdate</em></li>
                    <li>Synchronizing our component with data being delivered to it from any external source.</li>
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
                </ul>
            </main>
            <hr />
            <section className={hookStyles.exampleSection}>
            <h2>A concrete example:</h2>
                <section className={hookStyles.codeExampleText}>
                    <p>value held in state: {numberToIncrease}</p>
                    <p>number not held in state: {numberNotHeldInState}</p>
                    <div className={hookStyles.flexDesktopRowMobileColumn}>
                        <button onClick={() => increaseBothNumbers()}>increase both numbers</button>
                    </div>
                </section>
                <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    export default function UseStateHook() {
        // here we store a number in state, and instantiate it to 0
        const [numberToIncrease, setNumberToIncrease] = useState<number>(0)
        // creating a regular variable which can't be updated the way state is because it gets reset for every render
        let numberNotHeldInState: number = 0
        const increaseBothNumbers = () => {
            setNumberToIncrease(numberToIncrease + 1)
            numberNotHeldInState = numberNotHeldInState + 1
        }
        return (
            <p>value held in state: {numberToIncrease}</p>
            <p>number not held in state: {numberNotHeldInState}</p>
            <button onClick={() => increaseBothNumbers()}>increase both numbers</button>
        )
    }
    

`}
                </SyntaxHighlighter>
            </section>
        </div>
    )
}