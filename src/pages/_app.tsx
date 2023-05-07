import '@/styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: 'variable' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mateus Riff</title>
        <meta name="description" content="Mateus Riff's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}