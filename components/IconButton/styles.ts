import styled from "styled-components";

export const Container = styled.button`
  height: 34px;
  width: 34px;
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s ease;

  :hover {
    background: var(--twitter-hover);
  }
  
  svg {
    fill: var(--twitter);
    // 1D9BF0
    height: 20px;
    width: 20px;
  }
`;

export const Icon = styled.div`

`;