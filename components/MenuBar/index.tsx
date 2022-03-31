import React from 'react';

import Link from 'next/link';
import Image from 'next/image';

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
  AccountSection,
  LogoButton,
  NewTweetButton,
  NewTweetIcon,
  Avatar,
  LogoutIcon,
  AcccountText,
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

      <AccountSection>
        <Avatar>
          <Image src='https://pbs.twimg.com/profile_images/1378854577001410561/TCoFz-6M_400x400.jpg' alt='Avatar'layout='fill' objectFit='cover'/>
        </Avatar>
        <AcccountText>
          <strong>Gustavo Pauli</strong>
          <span>@Gustavo_ps</span>
        </AcccountText>
        <LogoutIcon />
      </AccountSection>
    </Container>
  );
}

export default MenuBar;