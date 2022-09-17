import React, {useState} from 'react'

type Props = {}

export default function UseStateHook({}: Props) {

    const [numberToIncrease, setNumberToIncrease] = useState<number>(0)
    let anotherNumber: number = 0

    const increaseBothNumbers = () => {
        setNumberToIncrease(numberToIncrease + 1)
        anotherNumber = anotherNumber + 1
    }

    return (
        <div>
            <h1>useState</h1>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#usestate'>documentation</a>
            <p>useState provides us with a value 'held in state', and a function to update it.</p>
            <p>What this means is that the value won't change when the component re-renders.</p>
            <p>useState is extremely useful for having responsive and dynamic user interfaces</p>
            <p>value held in state: {numberToIncrease}</p>
            <p>regular let variable: {anotherNumber}</p>
            <button onClick={() => increaseBothNumbers()}>re-render component</button>
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