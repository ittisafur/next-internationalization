import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Fragment>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </Fragment>
  ) 
}

export default MyApp
