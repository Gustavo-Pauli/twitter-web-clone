import React from "react";

import SideList from "../SideList";
import FollowSuggestion from "../FollowSuggestion";
import ExploreSugestion from "../ExploreSugestion";

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
          <FollowSuggestion name="React" screenName="reactjs" avatarSrc="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" />
          <FollowSuggestion name="Next.js" screenName="nextjs" avatarSrc="https://pbs.twimg.com/profile_images/1468045715083509767/JrehsCpb_400x400.png" />
          <FollowSuggestion name="Firebase" screenName="Firebase" avatarSrc="https://pbs.twimg.com/profile_images/1517183744636964875/_475wi5p_400x400.jpg"/>
        </SideList>

        <SideList title="What's happening">
          <ExploreSugestion category="COVID-19" title="See the latest news about Covid-19"/>
          <ExploreSugestion category="Gaming" title="Minecraft" subtitle="92.6K Tweets"/>
          <ExploreSugestion category="News" title="The Super Flower Blood Moon eclipse of 2022 has begun!"/>
          <ExploreSugestion category="Programming" title="#100DaysOfCode" subtitle="6.538 Tweets"/>
          <ExploreSugestion category="Programming" title="Webdev" subtitle="1.266 Tweets"/>
        </SideList>
      </Body>
    </Container>
  );
}

export default SideBar;