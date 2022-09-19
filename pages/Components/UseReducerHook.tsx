import React, {useEffect, useState, useReducer} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'


interface countInterface  {
    count: number
}

interface aStringInterface {
    nameString: string
}


interface actionInterface {
    type: string
}
const initialName= {nameString: 'dylan'}
const initialState = {count: 0};

export default function UseReducerHook() {

    const [state, dispatch] = useReducer(reducer, initialState);
    function reducer(state: countInterface, action: actionInterface) {
        switch (action.type) {
          case 'increment':
            return {count: state.count + 1};
          case 'decrement':
            return {count: state.count - 1};
          default:
            throw new Error();
        }
      }

    const [nameStringState, adjustNameArray] = useReducer(arrayReducer, initialName);

    function arrayReducer(nameStringState: aStringInterface, action: actionInterface) {
        switch (action.type) {
            case 'addletter':
                return {nameString: nameStringState.nameString + 'x'};
            case 'removeLetter':
                return {nameString: nameStringState.nameString.slice(0, nameStringState.nameString.length -1)};
            default:
              throw new Error();
          }
    }

    return (
        <div className={hookStyles.container}>
            <h1>useReducer</h1>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
            <br />
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
            <p>useReducer is similar to useState but allows for custom state logic.</p>
            <p>Instead of having multiple pieces of state and then external functions to handle the calculation of a more 'higher level' state, useReducer allows us to put all of that 'behind the scenes' within the state itself.</p>
            

            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>

            Name: {nameStringState.nameString}
            <button onClick={() => adjustNameArray({type: 'addLetter'})}>-</button>
            <button onClick={() => adjustNameArray({type: 'removeLetter'})}>+</button>
 


            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
            <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax}>
                
            
                {
`
interface countInterface  {
    count: number
}

interface aStringInterface {
    nameString: string
}


interface actionInterface {
    type: string
}
const initialName= {nameString: 'dylan'}
const initialState = {count: 0};
export default function UseReducerHook() {
    const [state, dispatch] = useReducer(reducer, initialState);
function reducer(state: countInterface, action: actionInterface) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  }

const [nameStringState, adjustNameArray] = useReducer(arrayReducer, initialName);

function arrayReducer(nameStringState: aStringInterface, action: actionInterface) {
    switch (action.type) {
        case 'addletter':
            return {nameString: nameStringState.nameString + 'x'};
        case 'removeLetter':
            return {nameString: nameStringState.nameString.slice(0, nameStringState.nameString.length -1)};
        default:
          throw new Error();
      }
}
    return (
        Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>

            Name: {nameStringState.nameString}
            <button onClick={() => adjustNameArray({type: 'addLetter'})}>-</button>
            <button onClick={() => adjustNameArray({type: 'removeLetter'})}>+</button>
 
    )
}
`
                }
            
            </SyntaxHighlighter>
            
            {/* <script src="https://gist.github.com/xylvnking/455c32bd7017d54f6d9016c1d583ef28.js"></script> */}
        </div>
    )
}