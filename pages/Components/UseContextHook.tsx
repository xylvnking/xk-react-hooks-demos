import React, {useEffect, useState, useContext} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { useRouter } from 'next/router'

const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

const ThemeContext = React.createContext(themes.light);

function Toolbar() {
    return (
        <div>
            <ThemedTextarea />
        </div>
    );
}
  function ThemedTextarea() {
        const theme = useContext(ThemeContext);
        const styleFromContext = {background: theme.background, color: theme.foreground}
        return (
            <textarea style={{ background: theme.background, color: theme.foreground, resize: 'none'}} className={hookStyles.inputLikeButton}/>
    );
}

export default function UseContextHook() {
    const router = useRouter()
    const [darkMode, setDarkMode] = useState<boolean>(true)

    useEffect(() => {
        router.push('/?hook=useContext', undefined, { shallow: true })
    }, [])

    return (
        <div className={hookStyles.container}>
            <header>
                <h1><small>use</small><span>Context</span></h1>
                <nav>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
                    <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
                </nav>
            </header>
            <main>
                <h2> {'>'} useContext allows us to pass state to children components without specificying the values as props.</h2>
                <h3>Instead of dealing with complicated generational props, useContext allows us to manage complex and deep state in a much more effective way.</h3>
                <section>
                    <ul>
                        <li>useContext provides data to child components no matter how deep they are nested.</li>
                        <li>When the context value changes, every component consuming that context is re-rendered.</li>
                        <li>If a component which isn't nested within the provider tries to access the context value it will receive the default value argument supplied on creation.</li>
                        <li>useContext is helpful when you have 'global data' and want to avoid prop drilling.</li>
                        <li>Common data to hold within context are color themes, authentication details, language, and user preferences.</li>
                        <li>useContext can make unit testing more difficult because the data within the tested component isn't readily available to the external test.</li>
                        <li>useContext requires 3 parts: the context, the provider, and the consumer</li>
                        const UserContext = createContext('Unknown');
                    </ul>
                </section>
                <h2>useContext <em>'hello world'</em>:</h2>
<SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax} customStyle={{padding:'0px', margin: '0px', fontSize: '14px'}}>
{`
    const SomeContext = createContext(some data here);

`}
</SyntaxHighlighter>
            </main>

            <hr />

            <section className={hookStyles.exampleSection}>
                <h2>A concrete example:</h2>
                <section >
                    <h3>When we toggle darkmode on the parent component, our ThemeContext.Provider passes that data down to our children without us having to do so imperitively through props.</h3>
                    <div className={hookStyles.flexDesktopRowMobileColumn} style={{width: '100%'}}>
                        <button onClick={() => setDarkMode(!darkMode)}>toggle {darkMode ? 'light' : 'dark'} mode</button>
                        <ThemeContext.Provider value={darkMode ? themes.dark : themes.light} >
                            <Toolbar />
                        </ThemeContext.Provider>
                    </div>
                </section>
            
<SyntaxHighlighter language="javascript" style={nightOwl} className={hookStyles.syntax}>
{`
const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };

const ThemeContext = React.createContext(themes.light);

function Toolbar() {
    return (
        <div>
            <ThemedTextarea />
        </div>
    );
}
  function ThemedTextarea() {
      const theme = useContext(ThemeContext);
      const styleFromContext = {background: theme.background, color: theme.foreground}
      return (
                <textarea style={styleFromContext} />
    );
}
export default function UseContextHook() {
    const [darkMode, setDarkMode] = useState<boolean>(true)
    return (
        <>
            <button onClick={() => setDarkMode(!darkMode)}>toggle {darkMode ? 'light' : 'dark'} mode</button>
            <ThemeContext.Provider value={darkMode ? themes.dark : themes.light}>
                <Toolbar />
            </ThemeContext.Provider>
        </>
    )
}
`}
</SyntaxHighlighter>
            </section>
            <button onClick={() => window.scrollTo({top: 100, behavior: 'smooth'})} className={hookStyles.scrollToTopButton}>^</button>
        </div>
    )
}