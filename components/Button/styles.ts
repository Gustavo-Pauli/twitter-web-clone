import styled from "styled-components";

interface Props {
  outlined?: boolean,
  textColor: string,
  bgColor: string,
  borderColor: string,
}

export const StyledButton =  styled.button<Props>`
  background: ${(props) => (props.outlined ? "transparent" : props.bgColor)};
  color: ${(props) => (props.textColor)};
  border: ${(props) => (props.outlined ? `1px solid ${props.borderColor}` : "none")};

  //  padding: 6px 16px 10px;
  padding: 8px 16px 10px;
  border-radius: 99999px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center; 

  transition-duration: 0.25s;

  :hover {
    cursor: pointer;
  }
`;