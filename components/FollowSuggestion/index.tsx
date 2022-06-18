import React from 'react';
import Image from 'next/image';

import Button from '../Button';

import { 
  Container,
  Avatar,
  Info,
  FollowButton,
 } from './styles';
import Link from 'next/link';

interface Props {
  name?: string,
  screenName?: string,
  avatarSrc: string,
}

const FollowSuggestion: React.FC<Props> = ({ 
  name, screenName, avatarSrc 
}) => {
  return (
    <Container>
      <div>
        <Avatar>
          <Image src={avatarSrc} alt='Avatar'layout='fill' objectFit='cover'/>
        </Avatar>

        <Info>
          <strong>{name}</strong>
          <span>{"@" + screenName}</span>
        </Info>
      </div>

      <FollowButton>
        <Button>
          Follow
        </Button>
      </FollowButton>
    </Container>
  );
}

export default FollowSuggestion;