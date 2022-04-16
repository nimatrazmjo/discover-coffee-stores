import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from "next/router";
import cls from 'classnames';

import CoffeeStoreData from '../../data/coffee-stores.json';
import { ICoffeeStore } from '../../interface/coffee-store.interface';
import styles from '../../styles/coffee-store.module.css';

interface Props {
  params: {
    id: string
  }
}

export const getStaticProps: GetStaticProps<any> = ({ params }: any) => {
  return {
    props: {
      store: CoffeeStoreData.find(CoffeeStore => CoffeeStore.id === parseInt(params.id))
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: CoffeeStoreData.map(CoffeeStore => ({ params: { id: CoffeeStore.id.toString() } })),
    fallback: true
  }
}

const CoffeeStore: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ store: { name, imgUrl, websiteUrl, address, neighbourhood } }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const handleUpVoteFunction = () => {
    console.log('Upvoted');
    
  }
  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.nameWrapper}>
            <h1>{name}</h1>
          </div>
          <Image
            src={imgUrl}
            alt={name}
            width={600}
            height={360}
            className={styles.storeImg} />

        </div>

        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image src="/static/icon/nearMe.svg" width={30} height={30} />
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image src="/static/icon/places.svg" width={30} height={30} />
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          
          <div className={styles.iconWrapper}>
            <Image src="/static/icon/star.svg" width={30} height={30} />
            <p className={styles.text}>1</p>
          </div>
          <button className={styles.upvoteButton} onClick={handleUpVoteFunction}> Up Vote </button>
        </div>
      </div>
    </div>
  )
}

export default CoffeeStore;