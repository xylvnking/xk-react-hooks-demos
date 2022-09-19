import type { NextPage } from 'next'
import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import UseStateHook from './Components/UseStateHook' 
import UseEffectHook from './Components/UseEffectHook' 
import UseContextHook from './Components/UseContextHook' 
import UseMemoHook from './Components/UseMemoHook' 
import UseReducerHook from './Components/UseReducerHook' 
import UseCallbackHook from './Components/UseCallbackHook' 
import UseRefHook from './Components/UseRefHook' 
import Layout from './Components/Layout' 

import styles from '../styles/Home.module.css'
import layoutStyles from '../styles/Layout.module.scss'





const Home: NextPage = () => {
  const [hookSelected, setHookSelected] = useState<string>('')
  const [layoutOpen, setLayoutOpen] = useState<boolean>(true)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Hook Demos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico?v=1.1" />
      </Head>

        {/* <nav className={layoutStyles.topNav}>
          <button onClick={() => setLayoutOpen(!layoutOpen)}>view hooks</button>
        </nav> */}
        <h1>REACT TYPESCRIPT HOOKS</h1>

      {/* <main className={layoutOpen ? `${layoutStyles.grid}` : `${layoutStyles.closed}`}> */}
      <main className={layoutStyles.grid}>
        {
          // layoutOpen 
          // &&
          <section className={layoutStyles.layoutColumn}>
            {/* <button onClick={() => setLayoutOpen(!layoutOpen)}>toggle layout</button> */}
            <Layout 
              selectHook={setHookSelected}
              hookSelected={hookSelected}
            />
          </section> 
          
        }
        
        <section className={layoutStyles.hookComponentsColumn}>
          <UseEffectHook />
          <UseStateHook />
          <UseContextHook />
          <UseMemoHook />
          <UseReducerHook />
          <UseCallbackHook />
          <UseRefHook />
        </section>
      </main>
    </div>
  )
}

export default Home
