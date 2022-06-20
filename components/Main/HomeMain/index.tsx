import React from 'react';

import { Container, Header } from './styles';
import { DefaultMainWrapper } from '../../../styles/GlobalStyledComponents';
// import { Title } from '../../../styles/GlobalStyledComponents';
import Title from '../../Title';
import TweetForm from '../../TweetForm';


const HomeMain: React.FC = () => {
  return (
    <DefaultMainWrapper>
      <Container>
        <Header>
          <Title>
            <div>
              <h1>Home</h1>
            </div>
          </Title>

          <TweetForm>

          </TweetForm>
        </Header>
      </Container>
    </DefaultMainWrapper>
  );
}

export default HomeMain;