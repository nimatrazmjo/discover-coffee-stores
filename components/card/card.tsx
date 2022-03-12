import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import './cart.module.css';

interface CardProps {
  name: string;
  imageUrl: string;
  href: string
}

const Card: React.FC<CardProps> = ({ name, imageUrl, href }) => {
  return (
    <Link href={href}>
      <a>
        <div>
          <h2>{name}</h2>
          <Image src={imageUrl} height={260} width={160} />
        </div>
      </a >
    </Link>
  )
}

export default Card;