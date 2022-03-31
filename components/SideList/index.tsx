import React from 'react';

import { Container, Item, Title} from './styles';

interface Props {
  title: string;
  // elements: React.ReactNode[];
  // children: React.ReactNode[];
}

const SideList: React.FC<Props> = ({ title, children }) => {
  const childrens = React.Children.toArray(children)

  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>


      {childrens.map((children, index) => (
        <Item key={index}>{children}</Item>
      ))}
    </Container>
  );
}

export default SideList;