import '../styles/globals.css'
import Layout from './Components/Layout' 
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
