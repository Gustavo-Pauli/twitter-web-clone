import React, { Children } from 'react';

import { Container } from './styles';

interface Props {
  category?: string;
  title: string;
  subtitle?: string;
}

const ExploreSugestion: React.FC<Props> = ({category, title, subtitle, children}) => {
  return (
    <Container>
      <span>{category}</span>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {children}
    </Container>
  );
}

export default ExploreSugestion;