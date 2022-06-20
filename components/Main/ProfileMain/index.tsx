import React from 'react';
import Link from 'next/link';
import ProfileHeader from '../../ProfileHeader';
import { Container, BackIcon, BottomMenu, HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon, Title, BackButton } from './styles';
import { DefaultMainWrapper } from '../../../styles/GlobalStyledComponents';

const ProfileMain: React.FC = () => {
  return (
    <DefaultMainWrapper>
      <Container>
        <Title>
          <Link href='/home' passHref>
            <BackButton>
              <BackIcon />
            </BackButton>
          </Link>

          <div>
            <h1>Gustavo Pauli</h1>
            <h2>612 Tweets</h2>
          </div>
        </Title>

        <ProfileHeader />

        <BottomMenu>
          <button>
            <HomeIcon />
          </button>
          <button>
            <ExploreIcon />
          </button>
          <button>
            <NotificationsIcon />
          </button>
          <button>
            <MessagesIcon />
          </button>
        </BottomMenu>
      </Container>
    </DefaultMainWrapper>
  );
}

export default ProfileMain;