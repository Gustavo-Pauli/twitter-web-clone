import React from 'react';

import ProfileMain from '../Main/ProfileMain';
import MenuBar from '../MenuBar';

import { Container, Wrapper } from './styles';

const Layout: React.FC = (props) => {
  return (
    <Container>
      <Wrapper>
        {/* <MenuBar /> */}
        {/* <ProfileMain /> */}
        {/* <SideBar /> */}
        {props.children}
      </Wrapper>
    </Container>
  );
}

export default Layout;