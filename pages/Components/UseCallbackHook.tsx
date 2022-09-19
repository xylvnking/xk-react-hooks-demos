import React, {useState, useCallback} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import CallbackHookChild from './ComponentChildren/CallbackHookChild';

export default function UseCallbackHook() {
    const [number, setNumber] = useState<number>(1)
    const [dark, setDark] = useState<boolean>(false)
    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#fff' : '#333'
    }

    // passing this to the child component as prop and have the useEffect dependent upon it would cause unnecessary fetching
    const getItems = () => {
        return [number, number + 1, number + 2]
    }

    const getItemsCallback = useCallback(
        () => {
            console.log('memoized callback function called')
            return [number, number + 1, number + 2]
        }, [number, number, number]
    )
    
    return (
        <div className={hookStyles.container}>
            <h1>useCallback</h1>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
            <br />
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>

            <p>useCallback allows us to pass a reference to a function instead of the function itself.</p>
            <p>this is important because when we pass a function as a prop, React treats it as a new function every render.</p>
            <p>
                passing a reference down as a prop instead of asking react to create a new one each time the component rerenders is advantageous
                 because it means that anything within the child which is dependent on the prop won't re-render if state changes within the parent
            </p>
            <p>Similar to useMemo, it's primarily for optimization purposes and its functionality should not make or break the application.</p>
            <p>A common example is if you're fetching data within a function in a parent component and then the child component 
                receives that function as a prop. You don't want changes to other pieces of irrelevant state within the parent to 
                cause 
            </p>

            <hr />

            <div style={theme}>
                <p>changing this value changes the state which our callback depends on</p>
                <input
                    type="number"
                    value={number}
                    onChange={e => setNumber(parseInt(e.target.value))}
                /> 

                <p>this button changes state which our callback does not depend on</p>
                <button onClick={() => setDark(prevDark => !prevDark)}>
                    Toggle theme
                </button>

                <hr />

                <p>Child component: </p>
                <CallbackHookChild  
                    getItemsCallback={getItemsCallback}
                />
                <hr />
            </div>

            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
            <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax}>
                {
`
// parent component

export default function UseCallbackHook() {
    const [number, setNumber] = useState<number>(1)
    const [dark, setDark] = useState<boolean>(false)
    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#fff' : '#333'
    }

    // passing this to the child component as prop and have the useEffect dependent upon it would cause unnecessary fetching
    const getItems = () => {
        return [number, number + 1, number + 2]
    }

    const getItemsCallback = useCallback(
        () => {
            console.log('memoized callback function called')
            return [number, number + 1, number + 2]
        }, [number, number, number]
    )
    return (
        <div style={theme}>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            /> 

            <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle theme
            </button>

            <CallbackHookChild  
                getItemsCallback={getItemsCallback}
            />
        </div>
    )}

// child component
export default function CallbackHookChild(props:any) {

    const [items, setItems] = useState([])
   
     useEffect(() => {
         setItems(props.getItemsCallback())
     }, [props.getItemsCallback])
   
     return (
       <ul>
         {items.map(item => <li key={item}>{item}</li>)}
       </ul>
     )
}
    
`
                }
            
            </SyntaxHighlighter>
            
            {/* <script src="https://gist.github.com/xylvnking/455c32bd7017d54f6d9016c1d583ef28.js"></script> */}
        </div>
    )
}