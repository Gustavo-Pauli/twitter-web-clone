import styled from "styled-components";

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

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;
    padding: 9px 19px 20px;
    max-height: 100vh;
    overflow-y: auto;
  }
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const Logo = styled.div`

`;

interface MenuButtonProps {
  active?: boolean;
}

export const MenuButton = styled.a<MenuButtonProps>`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  padding: 12px 0;
  outline: 0;

  span {
    display: none;
  }

  @media (min-width: 1280px) {
    span {
      display: inline;
      margin-left: 19px;

      font-weight: bold;
      font-size: 20px;
    }
  }

  & + a {
    margin-top: 4px;
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

export const AccountsSection = styled.div`

`;
