import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FormEventHandler } from 'react'
import Banner from '../components/banner/banner.component'
import Card from '../components/card/card'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const handleButton = () => {
    console.log('handler clicked');

  }
  return (
    <div className={styles.container}>
      <Head>
        <title> Coffee Connoisser </title>
        <meta name="description" content="Coffee Connoisser has been build using latest version of Next.js" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <main className={styles.main}>
        <Banner changeHandler={handleButton} />
        <div className={styles.heroImage}>
          <Image src="/hero-image.png" alt='coffe maker' width={700} height={400} />
        </div>
        <div className={styles.cardLayout}>

          <Card name='Darkhorse Coffee' imageUrl='/hero-image.png' href='coffee-store/darkhorse-coffee' />
        </div>
      </main>
    </div>
  )
}

export default Home
