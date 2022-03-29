import React from 'react';
import ProfileHeader from '../ProfileHeader';
import { Container, Header, ProfileMiniHeader, BackIcon, BottomMenu, HomeIcon, ExploreIcon, NotificationsIcon, MessagesIcon} from './styles';

// import { Container } from './styles';

const ProfileMain: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileMiniHeader>
          <strong>Gustavo Pauli</strong>
          <span>612 Tweets</span>
        </ProfileMiniHeader>
      </Header>

      <ProfileHeader />

      {/* TODO: just show bottom menu if on mobile*/}
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
  );
}

export default ProfileMain;