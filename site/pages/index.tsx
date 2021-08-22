/* eslint-disable @next/next/no-html-link-for-pages */

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Certi Covid
        </h1>
        <a href="/api/pass">DOWNLOAD</a>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Gary-Ascuy/Covid-Cert"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Covid Friends (AKA Los Amigos del Mani)
        </a>
      </footer>
    </div>
  )
}

export default Home
