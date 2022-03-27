import React from 'react';

import ProfileMain from '../ProfileMain';

import { Container, Wrapper } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        <ProfileMain />
        {/* <SideBar /> */}
      </Wrapper>
    </Container>
  );
}

export default Layout;