import React, {useEffect, useState, useReducer} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useRouter } from 'next/router'


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
    const router = useRouter()

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
    useEffect(() => {
        router.push('/?hook=useReducer', undefined, { shallow: true })
    }, [])


    // https://overreacted.io/a-complete-guide-to-useeffect/#decoupling-updates-from-actions

    return (
        <div className={hookStyles.container}>
            <header>
                <h1><small>use</small><span>Reducer</span></h1>
                <nav>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
                    {/* <br /> */}
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
                    {/* <br /> */}
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
                </nav>
            </header>
            <main>
                <h2> {'>'} useReducer is similar to useState but allows for custom state logic</h2>
                <h3>Instead of having multiple pieces of state and then external functions to handle the calculation of a more 'higher level' state,<strong>useReducer allows us to put all of that .<em className={hookStyles.blueText}>'behind the scenes' </em> within the state itself</strong></h3>
                <section>
                    <ul>
                        <li>useReducer is the cheat code of all hooks because it allows us to manage complex state more easily.</li>
                        <li>useReducer accepts a reducer function and a default state, and returns the actual state and a dispatch function.</li>
                        <li>We can implicitly alter state using the dispatch function by mapping actions to state transitions.</li>
                        <li>Since we generally useReducer with complex state, it's common to set the default state as an object even if it isn't necessary right away.</li>
                        <li>A simple rule to know when to useState vs useReducer is that when the value is a primitive, useState is usually more convenient whereas with arrays or objects (especially nested ones) it can be easier to useReducer.</li>
                        <li>Our reducer function generally takes state and action as arguments, with the state being the state it's being called on, and the action being the argument passed to the dispatch function which tells our reducer function what to do and by how much.</li>
                        <li>If you find yourself with multiple setState() calls in a row, consider encapsulating the functionality within a single reducer function which dispatches a single action.</li>
                        <li>Storing complex state within one object also makes it easier to cache part of it in local storage which can be retrieved as the initial state when the application restarts.</li>
                        <li>It's common to start with useState and then refactor to useReducer after it gets complex enough.</li>
                        <li>Grouping together data which are dependent on only each other can be beneficial, such as state to handle errors and loading and fetching.</li>
                        <li>We use what is typically called a 'payload' to tell our reducer what to do, and then have properties on that payload to make sure the top-level name of 'payload' is more general and easier to access when working on different codebases.</li>


                    </ul>
                </section>
                <h2>useReducer <em>'hello world'</em>:</h2>
                    <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    const [state, dispatch] = useReducer(reducer, initialArg, init);

`}
                    </SyntaxHighlighter>
                    <hr />
            </main>

            <h3><strong>Count:</strong> {state.count}</h3>
            <button onClick={() => dispatch({type: 'decrement'})} className={hookStyles.inputLikeButtonReducer}>-</button>
            <button onClick={() => dispatch({type: 'increment'})} className={hookStyles.inputLikeButtonReducer}>+</button>
            <h3><strong>Name:</strong> {nameStringState.nameString}</h3>
            <button onClick={() => adjustNameArray({type: 'addLetter'})} className={hookStyles.inputLikeButtonReducer}>-</button>
            <button onClick={() => adjustNameArray({type: 'removeLetter'})} className={hookStyles.inputLikeButtonReducer}>+</button>
 
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