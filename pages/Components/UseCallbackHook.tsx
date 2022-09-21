import React, {useState, useCallback, useEffect} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import CallbackHookChild from './ComponentChildren/CallbackHookChild';
import { useRouter } from 'next/router'

export default function UseCallbackHook() {
    const router = useRouter()
    const [number, setNumber] = useState<number>(1)
    if (number <= 0) {
        setNumber(1)
    }
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
            return [number, number + 1, number + 2]
        }, [number, number, number]
    )
    useEffect(() => {
        router.push('/?hook=useCallback', undefined, { shallow: true })
    }, [])
    
    return (
        <div className={hookStyles.container}>
            <header>
                <h1><small>use</small><span>Callback</span></h1>
                <nav>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
                </nav>
            </header>
            <main>
                <h2> {'>'} useCallback allows us to pass a reference to a function instead of the function itself</h2>
                <h3>this is important because when we pass a function as a prop, React treats it as a new function every render. When we useCallback, we're just passing a reference to the same function down, thus not asking React to instantiate a new function every render.</h3>
                <section>
                    <ul>
                        <li>passing a reference down as a prop instead of asking react to create a new one each time the component rerenders is advantageous because it means that anything within the child which is dependent on the prop won't re-render if state changes within the parent</li>
                        <li>Similar to useMemo, it's primarily for optimization purposes and its functionality should not make or break the application.</li>
                        <li>A common example is if you're fetching data within a function in a parent component and then the child component receives that function as a prop. You don't want changes to other pieces of irrelevant state within the parent to cause </li>
                    </ul>
                </section>
                <h2>useCallback <em>'hello world'</em>:</h2>
                <SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    const memoizedCallback = useCallback(() => {
        
        doSomething(a, b)

    },[a, b]) // dependency array

`}
                </SyntaxHighlighter>
            </main>
            

            <hr />

            <section className={hookStyles.exampleSection}>
            <h2>A concrete example:</h2>
                <section style={theme} >
                
                <p>Changing the number value in the input field causes the child component to re-render because it changes the values within the dependency array of our useCallback, which is passed into our child component and used within the dependency array for its useEffect, causing the child to call the function from the parent to keep it's values synchronized.</p>
                <p>If we didn't wrap the function which triggers a change to the values within the dependcy array of the child's useEffect inside of useCallback, any changes to state in the parent component would cause the child component to update it's data unnecessarily.</p>

                <hr />

                <h3>changing this value changes the state which our callback depends on</h3>
                <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} className={hookStyles.inputLikeButton}/> 
                <h3>Toggling the theme with the button below changes state which our callback does not depend on</h3>
                <button onClick={() => setDark(prevDark => !prevDark)}>Toggle theme</button>
                <div className={hookStyles.flexDesktopRowMobileColumn} style={{gap: '10px', paddingTop: '20px'}}>
                    <h3 style={{margin: '0px', padding: '0px'}}>Values within the child component: </h3>
                    <span style={{marginRight: '50px'}}>
                        <CallbackHookChild
                            getItemsCallback={getItemsCallback}
                        />
                    </span>
                </div>
                </section>
            </section>

            {/* <div style={theme}>
                

                <hr />

                <p>Child component: </p>
                <CallbackHookChild  
                    getItemsCallback={getItemsCallback}
                />
                <hr />
            </div> */}
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

    // passing this to the child component as prop and have the useEffect dependent upon it would cause unnecessary fetching because it would fire every render
    const getItems = () => {
        return [number, number + 1, number + 2]
    }

    // we useCallback here to avoid unnecessary re-renders of the child component
    const getItemsCallback = useCallback(
        () => {
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