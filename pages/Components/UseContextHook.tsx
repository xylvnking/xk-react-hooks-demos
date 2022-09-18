import React, {useEffect, useState, useContext} from 'react'
import hookStyles from '../../styles/Hooks.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism'

// type Props = {}
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
            <ThemedButton />
        </div>
    );
}
  function ThemedButton() {
      const theme = useContext(ThemeContext);
      const styleFromContext = {background: theme.background, color: theme.foreground}
      return (
        //     <>
        //         <button style={styleFromContext}>
        //         {/* <button style={styleFromContext}> */}
        //             useContext makes it easy to toggle between light and dark mode!
        //         </button>
        //         <textarea style={{ background: theme.background, color: theme.foreground }} />
        //   </>
                <textarea style={{ background: theme.background, color: theme.foreground }} />
    );
}

  

export default function UseContextHook() {
    const [darkMode, setDarkMode] = useState<boolean>(true)

    return (
        
        <div className={hookStyles.container}>
            <h1>useContext</h1>
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>official documentation</a>
            <br />
            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>source code</a>
            <p>useContext allows us to pass state to children components without specificying the values as props.</p>

            <ThemeContext.Provider value={darkMode ? themes.dark : themes.light}>
                <Toolbar />
            </ThemeContext.Provider>

            <a target='_blank' href='https://reactjs.org/docs/hooks-reference.html#useeffect' className={hookStyles.link}>code sandbox</a>
            <button onClick={() => setDarkMode(!darkMode)}>toggle {darkMode ? 'light' : 'dark'} mode</button>
            <SyntaxHighlighter language="javascript" style={nightOwl}>
                {/* {codeString} */}
            
                {
`
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
            <ThemedButton />
        </div>
    );
}
  function ThemedButton() {
      const theme = useContext(ThemeContext);
      const styleFromContext = {background: theme.background, color: theme.foreground}
      return (
                <textarea style={styleFromContext} />
    );
}
export default function UseContextHook() {
    const [darkMode, setDarkMode] = useState<boolean>(true)
    return (
        <ThemeContext.Provider value={darkMode ? themes.dark : themes.light}>
            <Toolbar />
        </ThemeContext.Provider>
    )
}
`
                }
            
            </SyntaxHighlighter>
            
            {/* <script src="https://gist.github.com/xylvnking/455c32bd7017d54f6d9016c1d583ef28.js"></script> */}
        </div>
    )
}