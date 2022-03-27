import React from 'react';
import { Container, Header, ProfileInfo, BackIcon } from './styles';

// import { Container } from './styles';

const ProfileMain: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong>Gustavo Pauli</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      {/* <ProfilePage /> */}

      {/* <BottomMenu>
        <HomeIcon />
        <ExploreIcon />
        <NotificationsIcon />
        <MessagesIcon />
      </BottomMenu> */}
    </Container>
  );
}

export default ProfileMain;