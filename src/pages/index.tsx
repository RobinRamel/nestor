import type { NextPage } from 'next'
import Head from 'next/head'

import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        
      </header>
    </div>
  )
}

export default IndexPage
