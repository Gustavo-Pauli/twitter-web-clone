import React from 'react';
import Link from 'next/link';
import ProfileHeader from '../../ProfileHeader';
import { Container, Header, ProfileMiniHeader, BackIcon, BottomMenu, HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon} from './styles';
import { DefaultMainWrapper } from '../../../styles/GlobalStyledComponents';

const ProfileMain: React.FC = () => {
  return (
    <DefaultMainWrapper>
      <Container>
        <Header>
          <Link href='/home' passHref>
            <a>
              <BackIcon />
            </a>
          </Link>

          <ProfileMiniHeader>
            <strong>Gustavo Pauli</strong>
            <span>612 Tweets</span>
          </ProfileMiniHeader>
        </Header>

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