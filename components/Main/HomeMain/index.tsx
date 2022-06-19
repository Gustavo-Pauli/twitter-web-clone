import React from 'react';

import { Container, Header, Title } from './styles';
import { DefaultMainWrapper } from '../../../styles/GlobalStyledComponents';

const HomeMain: React.FC = () => {
  return (
    <DefaultMainWrapper>
      <Container>
        <Header>
          <Title>Home</Title>
        </Header>
      </Container>
    </DefaultMainWrapper>
  );
}

export default HomeMain;