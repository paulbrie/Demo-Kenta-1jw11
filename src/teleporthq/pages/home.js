import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Demo Kenta</title>
        <meta property="og:title" content="Demo Kenta" />
      </Helmet>
      <div className={styles['container1']}>
        <h1>Visual Element Demo</h1>
      </div>
    </div>
  )
}

export default Home
