import React from "react";
import Image from "next/image";
import TweetsFeed from '../TweetsFeed'

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  BirthdayIcon,
  Followage,
  AdditionalData,
  EditButton,
  DataHeader,
  AvatarFlexPosition,
  AvatarBackground,
  AvatarAbsolutePosition
} from "./styles";

const ProfileHeader: React.FC = () => {
  
  return (
    <Container>
      <Banner>
        {/* TODO: add hover and link to open image in a popup */}
        <Image src='https://pbs.twimg.com/profile_banners/3371473948/1600649362/1080x360' alt='Avatar'layout='fill' objectFit='cover'/>
      </Banner>

      <ProfileData>
        <DataHeader>
          <AvatarFlexPosition>
            <AvatarAbsolutePosition>
              <AvatarBackground />
              <Avatar>
                <Image src='https://pbs.twimg.com/profile_images/1378854577001410561/TCoFz-6M_400x400.jpg' alt='Avatar'layout='fill' objectFit='cover'/>
              </Avatar>
            </AvatarAbsolutePosition>
          </AvatarFlexPosition>

          <EditButton>
            <button>
              Edit profile
            </button>
          </EditButton>
        </DataHeader>

        <div>
          <h1>Gustavo Pauli</h1>
          <h2>@GustavoPauli</h2>
        </div>

        <p>Self-taught 📚. Learning to be a Full Stack developer.</p>

        <AdditionalData>
          {/* TODO: put every span in a component */}
          <span>
            <LocationIcon />
            Florianópolis, Brazil
          </span>
          <span>
            <BirthdayIcon />
            Born April 1, 2000
          </span>
        </AdditionalData>

        <Followage>
          <a>
            <span>
              <strong>190</strong> Following
            </span>
          </a>
          <a>
            <span>
              <strong>148</strong> Followers
            </span>
          </a>
        </Followage>
      </ProfileData>

      <TweetsFeed />
    </Container>
  );
};

export default ProfileHeader;
