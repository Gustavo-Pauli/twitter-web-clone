import styled from "styled-components";
import { ArrowLeft, Home, Explore, Notifications, Messages } from "../../../styles/Icons";

export const Container = styled.div`

`;

/*
// Deprecated
export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--background-transparent);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  text-align: left;
  padding: 8px 0 9px 13px;

  > a {
    padding: 8px;
    border-radius: 50%;
    outline: 0;
    cursor: pointer;
    :hover {
      background:var(--button-hover);
    }
  }
`;
*/

export const BackButton = styled.a`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  margin-left: -6px;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  // outline: 0;
  // padding: 8px;
  cursor: pointer;
  :hover {
    background:var(--button-hover);
  }
`;

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

export const ProfileMiniHeader = styled.div`
  margin-left: 26px;
  display: flex;
  flex-direction: column;

  > strong {
    font-size: 20px;
  }

  > span {
    font-size: 13px;
    color: var(--gray);
  }
`;

export const BackIcon = styled(ArrowLeft)`
`;

export const BottomMenu = styled.div`
  @media (min-width: 500px) {
    display: none;
  }

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--background);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  button {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      
    }

    :hover {
      background: var(--button-hover)
    }
  }
`;

export const HomeIcon = styled(Home)`

`;

export const ExploreIcon = styled(Explore)`

`;

export const NotificationsIcon = styled(Notifications)`

`;

export const MessagesIcon = styled(Messages)`

`;
