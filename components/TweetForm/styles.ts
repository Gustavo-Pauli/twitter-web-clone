import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 8px 16px 0 16px;
  display: flex;
  flex-direction: row;

  border-bottom: 1px solid var(--outline);

  // Avatar
  > .Avatar {
    width: 48px;
    height: 48px;
    margin-right: 16px;
  }

  .halfOpacity {
    opacity: 0.5;
  }
`;

export const InputField = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .alreadyClicked {
    border-bottom: 1px solid var(--outline);
    margin-top: 14px;
    textarea {
      margin-bottom: 7px;
      ::placeholder {
        padding-top: 0px;
      }

      :focus {
        margin-top: 0;
      }
    }
  }
`;

export const TextBox = styled.div`
  width: 100%;
  min-height: 56px;
  // max-height: 600px;
  // height: 56px;
  // transition: height ease 0.25s, padding ease 0.25s, line-height ease 0.25s;

  > textarea {
    min-height: 56px;
    max-height: 367px;
    width: 100%;
    // height: 56px;
    color: var(--primary);
    font-size: 20px;
    outline: none;
    caret-color: var(--primary);
    resize: none;
    box-sizing: content-box;
    overflow: hidden;

    ::placeholder {
      color: #71767B;
      // line-height: 56px;
      padding-top: 14px;
    }

    :valid {
      // margin-top: 14px;
    }

    :invalid {
      // margin-top: 0;
    }

    :focus {
      margin-top: 14px;
      ::placeholder {
        //line-height: 27px;
        padding-top: 0;
      }
      // margin-top: 14px;
      // margin-top: 14px;
      // min-height: 42px;
      // height: 42px;
      // padding-bottom: 14px;
    }
  }
`;

export const ButtonsPanel = styled.div`
  width: 100%;
  height: 60px;
  // padding-top: 8px;

  display: flex;
  align-items: center;
`;

export const Toolbar = styled.div`
`;

export const TweetButton = styled.div`
  margin-left: auto;
  > button {
    height: 36px;
    width: 100%;
    font-size: 15px;
    transition: background ease 0.2s;
    
    :hover {
      background: var(--twitter-solid-hover);
    }
  }
`;

