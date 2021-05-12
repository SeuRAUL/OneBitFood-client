import Head from 'next/head'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <head>
        <title>OneBitFood V2</title>
        <link ref="icon" href="/favicon.ico" />
      </head>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
