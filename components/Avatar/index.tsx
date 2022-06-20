import React from 'react';
import Image from 'next/image';

import { Container } from './styles';
import Link from 'next/link'

interface Props {
  src: string;
  href?: string;
}

const Avatar: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ src, href, className }) => {
  return (
    <Container className={className}>
      {
        href == undefined ? 
        <Image src={src} alt='Avatar' layout='fill' objectFit='cover' /> 
        :
        <Link href={href} passHref>
          <a>
            <Image src={src} alt='Avatar' layout='fill' objectFit='cover' />
          </a>
        </Link>
      }
    </Container>
  );
}

export default Avatar;