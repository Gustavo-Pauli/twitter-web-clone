import React from 'react';

import Link from 'next/link';

import { 
  Container,
  NavSection,
  LogoIcon,
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
  LogoButton,
  NewTweetButton,
  NewTweetIcon,
 } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <NavSection className='BlockSelection'>
        <Link href='/home' passHref>
          <LogoButton>
            <div>
              <LogoIcon />
            </div>
          </LogoButton>
        </Link>

        <Link href='/home' passHref>
          <MenuButton>
            <div>
              <HomeIcon />
              <span>Home</span>
            </div>
          </MenuButton>
        </Link>

        <Link href='/explore' passHref>
          <MenuButton>
            <div>
              <ExploreIcon />
              <span>Explore</span>
            </div>
          </MenuButton>
        </Link>

        <Link href='/notifications' passHref>
          <MenuButton>
            <div>
              <NotificationsIcon />
              <span>Notifications</span>
            </div>
          </MenuButton>
        </Link>

        <Link href='/messages' passHref>
          <MenuButton>
            <div>
              <MessagesIcon />
              <span>Messages</span>
            </div>
          </MenuButton>
        </Link>

        <Link href='/bookmarks' passHref>
          <MenuButton>
            <div>
              <BookmarksIcon />
              <span>Bookmarks</span>
            </div>
          </MenuButton>
        </Link>

        <Link href='/lists' passHref>
          <MenuButton>
            <div>
              <ListsIcon />
              <span>Lists</span>
            </div>
          </MenuButton>
        </Link>

        <Link href='/profile' passHref>
          <MenuButton active>
            <div>
              <ProfileIcon filled/>
              <span>Profile</span>
            </div>
          </MenuButton>
        </Link>

        {/* <button> */}
          <MenuButton>
            <div>
              <MoreIcon />
              <span>More</span>
            </div>
          </MenuButton>
        {/* </button> */}

        <NewTweetButton>
          <div>
            <NewTweetIcon />
            <span>Tweet</span>
          </div>
        </NewTweetButton>
      </NavSection>

      <AccountsSection>

      </AccountsSection>
    </Container>
  );
}

export default MenuBar;