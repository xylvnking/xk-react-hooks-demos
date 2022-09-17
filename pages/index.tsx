import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import UseStateHook from './Components/UseStateHook'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hook Demos</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="favicon.ico?v=1.1" />
      </Head>

      <UseStateHook />

    </div>
  )
}

export default Home