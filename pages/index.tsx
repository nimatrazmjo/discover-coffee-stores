import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import CoffeeStores from '../data/coffee-stores.json';

import Banner from '../components/banner/banner.component'
import Card from '../components/card/card'
import styles from '../styles/Home.module.css'
import { ICoffeeStore } from '../interface/coffee-store.interface';

export async function getStaticProps() {
  return {
    props: {CoffeeStores}, // will be passed to the page component as props
  }
}

interface HomeProps {
  CoffeeStores: ICoffeeStore[]
}

const Home: NextPage<HomeProps> = ({CoffeeStores}) => {
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
        <h2 className={styles.heading2}>Toronto Stores</h2>
        <div className={styles.cardLayout}>
          {
            CoffeeStores.map((coffeeStore: any) => <Card  key={coffeeStore.id}
              name={coffeeStore.name} 
              imageUrl={coffeeStore.imgUrl}
              href={`coffee-store/${coffeeStore.id}`} />)
          }
          
        </div>
      </main>
    </div>
  )
}

export default Home
