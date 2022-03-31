import React from 'react';

import SideList from '../SideList';

import { Container, 
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
 } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder='Search Twitter' />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <SideList title='You might like'>
          <h2>Test</h2>
          <h3>Test</h3>
          <h4>Test</h4>
        </SideList>
        <SideList title='You might like'>
          <h2>Test</h2>
          <h3>Test</h3>
          <h4>Test</h4>
        </SideList>
      </Body>
    </Container>
  );
}

export default SideBar;