import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MenuButton from "../MenuButton";
import { 
  Container,
  NavSection,
  LogoIcon,
  AccountSection,
  LogoButton,
  NewTweetButton,
  NewTweetIcon,
  Avatar,
  LogoutIcon,
  AccountText,
 } from './styles';


interface Active {
  active?: string;
}

export type MenuCategories = "Home" | "Explore" | "Notifications" | "Messages" | "Bookmarks" | "Lists" | "Profile" | "More";

const MenuBar: React.FC<Active> = ({ active }) => {
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
          <a>
            <MenuButton category="Home" active={active === "Home"} />
          </a>
        </Link>

        <Link href='/explore' passHref>
          <a>
            <MenuButton category="Explore" active={active === "Explore"} />
          </a>
        </Link>

        <Link href='/notifications' passHref>
          <a>
            <MenuButton category="Notifications" active={active === "Notifications"} />
          </a>
        </Link>

        <Link href='/messages' passHref>
          <a>
            <MenuButton category="Messages" active={active === "Messages"} />
          </a>
        </Link>

        <Link href='/bookmarks' passHref>
          <a>
            <MenuButton category="Bookmarks" active={active === "Bookmarks"} />
          </a>
        </Link>

        <Link href='/lists' passHref>
          <a>
            <MenuButton category="Lists" active={active === "Lists"} />
          </a>
        </Link>

        <Link href='/profile' passHref>
          <a>
            <MenuButton category="Profile" active={active === "Profile"} />
          </a>
        </Link>

        {/* <button> */}
        <MenuButton category="More" />
        {/* </button> */}

        <NewTweetButton>
          <div>
            <NewTweetIcon />
            <span>Tweet</span>
          </div>
        </NewTweetButton>
      </NavSection>

      <Link href='/' passHref>
        <a>
          <AccountSection>
            <Avatar>
              <Image src='https://pbs.twimg.com/profile_images/1378854577001410561/TCoFz-6M_400x400.jpg' alt='Avatar'layout='fill' objectFit='cover'/>
            </Avatar>
            <AccountText>
              <strong>Gustavo Pauli</strong>
              <span>@Gustavo_ps</span>
            </AccountText>
            <LogoutIcon />
          </AccountSection>
        </a>
      </Link>
    </Container>
  );
}

export default MenuBar;