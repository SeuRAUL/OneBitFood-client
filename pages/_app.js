import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return 
    <>
      <head>
        <title>OneBitFood V2</title>
      </head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
}

export default MyApp
