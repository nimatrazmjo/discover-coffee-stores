import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from './cart.module.css';
import cls from 'classnames';


interface CardProps {
  name: string;
  imageUrl: string;
  href: string
}

const Card: React.FC<CardProps> = ({ name, imageUrl, href }) => {
  return (
    <Link href={href}>
      <a className={styles.cardLink}>
        <div className={cls('glass', styles.container)}>
          <div className={styles.cardHeaderWrapper}>
            <h2 className={styles.cardHeader}>{name}</h2>
          </div>
          <div className={styles.cardImageWrapper}>
            <Image
              className={styles.cardImage}
              src={imageUrl} height={260} width={160} />
          </div>
        </div>
      </a >
    </Link>
  )
}

export default Card;