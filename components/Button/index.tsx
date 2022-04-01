import React from 'react';

import { StyledButton } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  textColor?: string,
  bgColor?: string,
  borderColor?: string,
}

const Button: React.FC<ButtonProps> = ({ 
  outlined=false,
  textColor="var(--background)",
  bgColor="var(--primary)",
  borderColor="var(--blue-gray)",
  children,
  ...props 
 }) => {
  return (
    <StyledButton {...props} outlined={outlined} textColor={textColor} bgColor={bgColor} borderColor={borderColor}>
      {children}
    </StyledButton>
  );
}

export default Button;