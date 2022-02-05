import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'  
import Banner from '../components/banner/banner.component'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title> Coffee Connoisser </title>
        <meta name="description" content="Coffee Connoisser has been build using latest version of Next.js" />
        <link rel="icon" href="/favicon.ico" />
      
      </Head>

      <main className={styles.main}>
        <Banner />
      </main>
    </div>
  )
}

export default Home
