import React from "react";

import SideList from "../SideList";
import FollowSuggestion from "../FollowSuggestion";

import { Container, 
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
 } from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <SideList title="You might like">
          <FollowSuggestion name="React" screenName="@reactjs" avatarSrc="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" />
          <FollowSuggestion name="Next.js" screenName="@nextjs" avatarSrc="https://pbs.twimg.com/profile_images/1468045715083509767/JrehsCpb_400x400.png" />
          <FollowSuggestion name="Firebase" screenName="@Firebase" avatarSrc="https://pbs.twimg.com/profile_images/1012243829477392387/m3cEA33V_400x400.jpg" />
        </SideList>

        <SideList title="What's happening">
          <h2>Test</h2>
          <h3>Test</h3>
          <h4>Test</h4>
        </SideList>
      </Body>
    </Container>
  );
}

export default SideBar;