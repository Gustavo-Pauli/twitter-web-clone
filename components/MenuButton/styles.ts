import styled from 'styled-components';

import { 
  Home,
  Explore,
  Notifications,
  Messages,
  Bookmarks,
  Lists,
  Profile,
  More,
 } from "../../styles/Icons"; 


 interface MenuButtonProps {
  active?: boolean;
}

export const Container = styled.div<MenuButtonProps>`
  svg {
    fill: var(--primary);
  }

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  // padding: 12px 0;
  outline: 0;
  width: 52px;
  height: 52px;
  // border-radius: 99999px;
  box-sizing: content-box; 
  padding: 4px 0;
  @media (max-height: 704px) {
    padding: 0;
  }

  cursor: pointer;
  text-decoration: none;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99999px;
    transition: background 0.2s ease;
    padding: 12px;
    @media (max-width: 1280px) {
      padding: 0;
    }
  }

  span {
    display: none;
  }

  :hover {
    div {
      background: var(--button-hover);
    }
  }

  @media (min-width: 1280px) {
    width: 100%;
    justify-content: left;
    span {
      display: inline;
      margin: 0 15px 0 20px;

      font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
      font-size: 20px;
    }
    div {
      width: auto;
      height: auto;
    }
  }
`;

// apply on all menu icons
const iconCSS = styled.div`
  flex-shrink: 0;
`;

export const HomeIcon = styled(Home)`
  ${iconCSS}
`;

export const ExploreIcon = styled(Explore)`
  ${iconCSS}
`;

export const NotificationsIcon = styled(Notifications)`
  ${iconCSS}
`;

export const MessagesIcon = styled(Messages)`
  ${iconCSS}
`;

export const BookmarksIcon = styled(Bookmarks)`
  ${iconCSS}
`;

export const ListsIcon = styled(Lists)`
  ${iconCSS}
`;

export const ProfileIcon = styled(Profile)`
  ${iconCSS}
`;

export const MoreIcon = styled(More)`
  ${iconCSS}
`;
