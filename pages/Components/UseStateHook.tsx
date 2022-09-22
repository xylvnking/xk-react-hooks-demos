import React, {useState, useEffect} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useRouter } from 'next/router'



export default function UseStateHook() {
    const router = useRouter()

    const [numberToIncrease, setNumberToIncrease] = useState<number>(0)
    let numberNotHeldInState: number = 0

    const increaseBothNumbers = () => {
        setNumberToIncrease(numberToIncrease + 1)
        numberNotHeldInState = numberNotHeldInState + 1
    }

    useEffect(() => {
        router.push('/?hook=useState', undefined, { shallow: true })
    }, [])

    return (
        <div className={hookStyles.container}>
            <header>
                <h1><small>use</small><span>State</span></h1>
                <nav>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#usestate' className={hookStyles.link}>official documentation</a>
                    {/* <br /> */}
                    <a target='_blank' href='https://github.com/xylvnking/xk-react-hooks-demos/blob/main/pages/Components/UseStateHook.tsx' className={hookStyles.link}>source code</a>
                    {/* <br /> */}
                    {/* <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a> */}
                </nav>
            </header>
           
            <main>
                <h2> {'>'} useState allows data to persist between renders</h2>
                <h3>Regular variables die when the function which creates them returns, but <strong><em className={hookStyles.blueText}>state variables are kept alive by React</em></strong></h3>
                {/* <h3>Whereas normal variables are instantiated on every render<strong>useState gives us a way to create <em className={hookStyles.blueText}>dynamic and persistent user interfaces and experiences</em></strong></h3> */}
                <section>
                    <ul>
                        <li>useState provides us with a value <em className={hookStyles.blueText}>'held in state'</em>, and a function to update it. The useState 'hello world' below this section shows the usual format this takes. It's common to import useState from React so that we can omit the 'React.' before we useState.</li>
                        {/* <li>Data held in state doesn't change over time, it's always the component being called again.</li> */}
                        <li>When we update data which is held in state, it triggers a re-rendering of the component to maintain synchronization of the user interface. </li>
                        <li>Lots of other hooks can be seen as clever ways to leverage the concept of state for different goals such as optimization, convenience, or controlling data flow with more precision.</li>
                        <li>useState is one of the most common and popular hooks because it's easy to use and provides tons of functionality. If the data held in state is sufficiently complex, consider using useReducer.</li>
                        <li>State should not be altered directly and instead be altered with it's corresponding 'set' function which we create when declaring it. The 'set' function can be named anything, but the convention is to use [data, setData]. The React Hook useReducer is commonly used to handle complex state which is updated with relatively unchanging functionality</li>
                        <li>When we declare state we're actually desctructuing the return of useState, because it makes more sense to use names vs indexes like [0]</li>
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
                    <h3>value held in state: {numberToIncrease}</h3>
                    <h3>number not held in state: {numberNotHeldInState}</h3>
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
            <button onClick={() => window.scrollTo({top: 100, behavior: 'smooth'})} className={hookStyles.scrollToTopButton}>^</button>
        </div>
    )
}