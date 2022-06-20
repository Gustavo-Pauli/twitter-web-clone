import React from "react";

import {
  Container,
  InputField,
  TextBox,
  ButtonsPanel,
  Toolbar,
  TweetButton,
} from "./styles";
import Avatar from "../Avatar";
import TextArea from "../TextArea";

const TweetForm: React.FC = () => {
  return (
    <Container>
      <Avatar
        src="https://pbs.twimg.com/profile_images/1378854577001410561/TCoFz-6M_400x400.jpg"
        href="/profile"
        className="Avatar"
      />

      <InputField>
        <TextBox>
          {/* <TextInput placeholder="What's happening?" /> */}
          <TextArea placeholder="What's happening?" maxHeight={367} />
        </TextBox>
        <ButtonsPanel>
          <Toolbar></Toolbar>
          <TweetButton></TweetButton>
        </ButtonsPanel>
      </InputField>
    </Container>
  );
};

export default TweetForm;
