import Link from 'next/link';
import React from 'react';

import { Container, Item, Title, Footer} from './styles';

interface Props {
  title: string;
  // elements: React.ReactNode[];
  // children: React.ReactNode[];
}

const SideList: React.FC<Props> = ({ title, children }) => {
  const childrens = React.Children.toArray(children)

  return (
    <Container>
      <Title>{title}</Title>

      {childrens.map((children, index) => (
        <Item key={index}>{children}</Item>
      ))}

      <Item>
        <Footer>
          Show more
        </Footer>
      </Item>
    </Container>
  );
}

export default SideList;