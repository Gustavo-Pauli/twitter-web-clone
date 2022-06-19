import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--side-bar-body);
  border-radius: 14px;
`;

export const Item = styled.div`
  // padding: 10px 16px;
  // font-size: 15px;
  color: var(--primary);
  transition-duration: 0.25s;

  + div {
    // border-top: 1px solid var(--outline);
  }

  :first-child {
    // padding-top: 13px;
  }

  :last-child {
    // padding-bottom: 17px;
  }

  :hover {
    background: var(--light-hover);
    cursor: pointer;
  }
`;

export const Title = styled.div`
  padding: 12px 16px;
  font-weight: bold;
  font-size: 20px;
`;

export const Footer = styled.div`
  padding: 16px;
  font-size: 15px;
  color: var(--twitter);
  // font-weight: bold;
`;