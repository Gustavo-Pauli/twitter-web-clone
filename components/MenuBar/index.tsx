import React from 'react';

import Link from 'next/link';

import { 
  Container,
  NavSection,
  Logo,
  MenuButton,
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
  AccountsSection,
 } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <NavSection>
        <Logo />

        <Link href='/home' passHref>
          <MenuButton>
            <HomeIcon />
            <span>Home</span>
          </MenuButton>
        </Link>

        <MenuButton>
          <ExploreIcon />
          <span>Explore</span>
        </MenuButton>

        <MenuButton>
          <NotificationsIcon />
          <span>Notifications</span>
        </MenuButton>

        <MenuButton>
          <MessagesIcon />
          <span>Messages</span>
        </MenuButton>

        <MenuButton>
          <BookmarksIcon />
          <span>Bookmarks</span>
        </MenuButton>

        <MenuButton>
          <ListsIcon />
          <span>Lists</span>
        </MenuButton>

        <MenuButton active>
          <ProfileIcon />
          <span>Profile</span>
        </MenuButton>

        <MenuButton>
          <MoreIcon />
          <span>More</span>
        </MenuButton>
      </NavSection>

      <AccountsSection>

      </AccountsSection>
    </Container>
  );
}

export default MenuBar;