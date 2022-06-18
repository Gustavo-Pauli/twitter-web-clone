import styled from "styled-components";

export const Container = styled.div`
  padding: 10px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  background: var(--gray);
`;

export const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  > strong {
    color: var(--primary);
    font-size: 15px;
    font-weight: bold;
  }

  > span {
    color: var(--gray);
    font-size: 15px;
    font-weight: normal;
  }
`;

export const FollowButton = styled.div`
  > button:hover {
    background: var(--primary-hover);
  }
`;
