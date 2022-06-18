import React from 'react';

import { Container, Wrapper, ContentSection, Content, ImageSection } from './styles';
import Button from '../Button';
import Link from 'next/link';

const IndexPage: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ContentSection>
          <Content>
            <div>{/* Logo */}</div>
            <h1>Happening now</h1>
            <h2>Join Twitter today.</h2>
            <Button>Sign up with Google</Button>
            <Button>Sign up with Apple</Button>
            <span>or</span>
            <Button>Sign up with phone or email</Button>

            <div>
              <h3>Already have an account?</h3>
              <Link href='/profile' passHref>
                <Button outlined>Sign in</Button>
              </Link>
            </div>
          </Content>
        </ContentSection>
        <ImageSection>
          <img src="https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png" />
        </ImageSection>
      </Wrapper>
    </Container>
  );
}

export default IndexPage;