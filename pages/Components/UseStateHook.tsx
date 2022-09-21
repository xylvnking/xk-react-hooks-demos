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
                <h2> {'>'} useState allows data to persist between renders</h2>
                <h3>This means that <strong><em className={hookStyles.blueText}></em></strong></h3>
                <section>
                    <ul>
                        <li>useState provides us with a value <em className={hookStyles.blueText}>'held in state'</em>, and a function to update it.</li>
                        <li>What this means is that the value won't change when the component re-renders.</li>
                        <li>useState is extremely useful for having responsive and dynamic user interfaces</li>
                        <li>state doesn't change over time, it's always the component being called again</li>
                        <li>Regular variables die when the function which creates them returns, but state variables are kept alive by React.</li>
                        <li>State should not be altered directly and instead be altered with it's corresponding 'set' function which we create when declaring it. The 'set' function can be named anything, but the convention is to use [data, setData].</li>
                        <li>When we declare state we're actually desctructuing the return of useState, because it makes more sense to use names vs indexes like [0]</li>
                        <li>The name for the </li>
                        <li>State can be </li>
                    </ul>
                </section>
            <h2>useState <em>'hello world'</em>:</h2>
            <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    const [state, setState] = React.useState(<DEFAULT_VALUE>)

`}
            </SyntaxHighlighter>


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