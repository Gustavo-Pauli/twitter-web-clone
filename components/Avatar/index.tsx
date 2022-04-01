import React from 'react';
import Image from 'next/image';

import { Container } from './styles';

interface Props {
  src: string,
}

const Avatar: React.FC<Props> = ({ src }) => {
  return (
    <Container>
      <Image src={src} alt='Avatar' layout='fill' objectFit='cover'/>
    </Container>
  );
}

export default Avatar;