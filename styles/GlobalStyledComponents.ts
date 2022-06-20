import styled from "styled-components";

export const DefaultMainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

/*
export const Title = styled.div`
  height: 53px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    font-size: 20px;
  }

  h2 {
    font-size: 13px;
    font-weight: normal;
    color: var(--gray);
  }
`;
*/