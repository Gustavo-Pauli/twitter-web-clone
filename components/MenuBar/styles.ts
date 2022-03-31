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
  Twitter,
  NewTweet,
  Logout,
 } from "../../styles/Icons"; 

//  import logout from '../../assets/SVGIcons/menu-bar/'

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;
    padding: 0 2px;
    max-height: 100vh;
    overflow-y: none;
  }
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* & > * {
    margin-bottom: 6px;
  } */

  @media (min-width: 1280px) {
    width: 250px;
    align-items: flex-start;
  }
`;

export const LogoButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  box-sizing: content-box; 
  padding: 4px 0;

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
  }

  :hover {
    div {
      background: var(--twitter-hover);
    }
  }
`;

interface MenuButtonProps {
  active?: boolean;
}

export const MenuButton = styled.a<MenuButtonProps>`
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

  cursor: pointer;
  text-decoration: none;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 99999px;
    padding: 12px;
    transition: background 0.2s ease;
  }

  span {
    display: none;
  }

  &:hover {
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

export const LogoIcon = styled(Twitter)`
  ${iconCSS}
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

// maybe change this to a button instead of a div later
export const NewTweetButton = styled.div`
  width: 52px;
  height: 52px;

  box-sizing: content-box; 
  padding-top: 16px;

  div {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    border-radius: 99999px;
    background: var(--secondary);
    transition: background 0.2s ease;

    svg {
      display: flex;
    }

    span {
      display: none;
      font-weight: bold;
      font-size: 17px;
    }
  }

  @media (min-width: 1280px) {
    div {
      width: 226px;

      svg {
        display: none;
      }
      
      span {
        display: flex;
      }
    }
  }

  :hover {
    div {
      background: var(--secondary-hover);
    }
  }
`;

export const NewTweetIcon = styled(NewTweet)`

`;

export const AccountSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;

  border-radius: 99999px;
  margin-bottom: 16px;

  cursor: pointer;
  transition: background 0.2s ease;
  
  @media (min-width: 1280px) {
    width: 100%;
    height: 64px;
    justify-content: left;
  }
  
  :hover {
    background: var(--button-hover);
  }

`;

export const Avatar = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  
  @media (min-width: 1280px) {
    margin-left: 14px;
  }
`;

export const AcccountText = styled.div`
  display: none;
  flex-direction: column;
  strong {
    font-size: 15px;
    font-weight: bold;
  }
  span {
    font-size: 15px;
    font-weight: normal;
    color: var(--gray);
  }

  @media (min-width: 1280px) {
    display: flex;
    margin-left: 12px;
  }
`;

export const LogoutIcon = styled(Logout)`
  display: none;
  width: 20px;
  height: 20px;
  flex-shrink: 0;

  color: var(--primary);

  @media (min-width: 1280px) {
    display: inline;
    position: relative;
    margin: 0 14px 0 auto;

  }
`;

