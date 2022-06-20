import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 120px;
  padding: 8px 16px;
  display: flex;
  flex-direction: row;

  border-bottom: 1px solid var(--outline);

  // Avatar
  > .Avatar {
    width: 48px;
    height: 48px;
    margin-right: 16px;
  }
`;

export const InputField = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TextBox = styled.div`
  width: 100%;
  min-height: 56px;
  // max-height: 600px;
  // height: 56px;

  > textarea {
    min-height: 56px;
    max-height: 367px;
    width: 100%;
    // height: 28px;
    color: var(--primary);
    font-size: 20px;
    outline: none;
    caret-color: var(--primary);
    resize: none;
    box-sizing: content-box;
    overflow: hidden;

    ::placeholder {
      color: #71767B;
      line-height: 56px;
    }

    :valid {
      margin-top: 14px;
    }

    :invalid {
      margin-top: 0;
    }

    :focus {
      ::placeholder {
        line-height: 27px;
      }
      margin-top: 14px;
    }
  }
`;

/*
export const TextInput = styled.textarea`
  width: 100%;
  // height: 100%;
  color: var(--primary);
  font-size: 20px;
  outline: none;
  caret-color: var(--primary);

  resize: none;
  box-sizing: content-box;
  // overflow: hidden;

  ::placeholder {
    color: #71767B;
  }
`;
*/

export const ButtonsPanel = styled.div``;

export const Toolbar = styled.div``;

export const TweetButton = styled.div``;
