//========== WIP ===========

import React, { HTMLProps } from 'react';
import { StyledComponent } from 'styled-components';

import { Container, Icon } from './styles';

interface Props {
  // iconSvg: HTMLProps<HTMLOrSVGElement>;
  // iconSvg: StyledComponent<"div", any, {}, never>;
  iconFC: any;
  color: string;
}



const IconButton: React.FC<Props> = (props) => {
  // import IconImg from props.iconRelSrc;

  return (
    <Container>
      {/* props.iconSvg.style.fill = props.color */}
      {/*<Icon></Icon>*/}
      {props.iconFC()}
    </Container>
  );
}

export default IconButton;