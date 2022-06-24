import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";

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
import IconButton from "../IconButton";
import Button from "../Button";
import Media from "../../assets/icons/Media";
import GIF from "../../assets/icons/GIF";
import Pool from "../../assets/icons/Pool";
import Emoji from "../../assets/icons/Emoji";
import Schedule from "../../assets/icons/Schedule";
import TagLocation from "../../assets/icons/TagLocation";


const TweetForm: React.FC = () => {
  const [alreadyClicked, setAlreadyClicked] = useState(false); // if was clicked at least once
  const [textAreaInput, setTextAreaInput] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  {
    /* const textAreaInput = useCallback(() => {
    return textAreaRef.current?.value
  }, [textAreaRef.current?.value]); */
  }

  return (
    <Container>
      <Avatar
        src="https://pbs.twimg.com/profile_images/1378854577001410561/TCoFz-6M_400x400.jpg"
        href="/profile"
        className="Avatar"
      />

      <InputField>
        <TextBox className={alreadyClicked ? "alreadyClicked" : ""}>
          <TextArea
            divRef={textAreaRef}
            maxHeight={367}
            placeholder="What's happening?"
            callback={setTextAreaInput}
            onFocus={() => {
              if (!alreadyClicked) {
                setAlreadyClicked(true);
              }
            }}
          />
        </TextBox>
        <ButtonsPanel>
          <Toolbar>
            <IconButton iconFC={Media} color={"var(--twitter)"} />
            <IconButton iconFC={GIF} color={"var(--twitter)"} />
            <IconButton iconFC={Pool} color={"var(--twitter)"} />
            <IconButton iconFC={Emoji} color={"var(--twitter)"} />
            <IconButton iconFC={Schedule} color={"var(--twitter)"} />
            <IconButton iconFC={TagLocation} color={"var(--twitter)"} />
          </Toolbar>
          <TweetButton>
            <Button
              textColor="var(--primary)"
              bgColor="var(--twitter)"
              className={textAreaInput == "" ? "halfOpacity" : ""}
              onClick={() => {
                console.log("click");
              }}
            >
              Tweet
            </Button>
          </TweetButton>
        </ButtonsPanel>
      </InputField>
    </Container>
  );
};

export default TweetForm;
