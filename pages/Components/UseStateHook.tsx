import React, {useState} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'

type Props = {}

export default function UseStateHook({}: Props) {

    const [numberToIncrease, setNumberToIncrease] = useState<number>(0)
    let anotherNumber: number = 0

    const increaseBothNumbers = () => {
        setNumberToIncrease(numberToIncrease + 1)
        anotherNumber = anotherNumber + 1
    }

    return (
        <div className={hookStyles.container}>
            <h1>useState</h1>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#usestate' className={hookStyles.link}>documentation</a>
            <p>useState provides us with a value 'held in state', and a function to update it.</p>
            <p>What this means is that the value won't change when the component re-renders.</p>
            <p>useState is extremely useful for having responsive and dynamic user interfaces</p>
            <p>value held in state: {numberToIncrease}</p>
            <p>regular let variable: {anotherNumber}</p>
            <button onClick={() => increaseBothNumbers()}>re-render component</button>
            {/* common mistake: using state instead of ref */}

            {/* setting the state to the same value it already is renders it an idempotent operation */}

            <h1>state doesn't change over time, it's always the component being called again</h1>
            <pre>
                {
                    `
const [numberToIncrease, setNumberToIncrease] = useState<number>(0)
let anotherNumber: number = 0

const increaseBothNumbers = () => {
    setNumberToIncrease(numberToIncrease + 1)
    anotherNumber = anotherNumber + 1
}
                    `
                }
            </pre>
        </div>
    )
}