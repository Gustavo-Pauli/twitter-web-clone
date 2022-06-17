import styled from "styled-components";

import { 
  RetweetBold as IconRetweetBold,
  Comment as IconComment,
  Retweet as IconRetweet,
  Like as IconLike,
  Share as IconShare,
  } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 8px 0;
  max-width: 425px;

  * {
    align-items: center;
  }

  div {
    // display: flex;
    // flex-direction: row;
  }

  // BUTTONS
  a {
    display: flex;
    text-decoration: none;
    display: flex;
    
    // ICON
    div {
      height: 32px;
      // width: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      // justify-content: center;
    }

    // TEXT
    span {
      margin: 0 12px;
      font-size: 13px;
      color: var(--gray);
    }
  }
`;

export const Reply = styled.a`
  :hover {
    svg {
      transition: fill 0.2s ease;
      fill: var(--twitter);
    }
    span {
      transition: color 0.2s ease;
      color: var(--twitter);
    }
    div {
      transition: background 0.2s ease;
      background: var(--twitter-hover);
    }
  }
`;
  
export const Retweet = styled.a`
  :hover {
    svg {
      transition: fill 0.2s ease;
      fill: var(--retweet);
    }
    span {
      transition: color 0.2s ease;
      color: var(--retweet);
    }
    div {
      transition: background 0.2s ease;
      background: var(--retweet-hover);
    }
  }
`;

export const Like = styled.a`
  :hover {
    svg {
      transition: fill 0.2s ease;
      fill: var(--like);
    }
    span {
      transition: color 0.2s ease;
      color: var(--like);
    }
    div {
      transition: background 0.2s ease;
      background: var(--like-hover);
    }
  }
`;

export const Share = styled.a`
  :hover {
    svg {
      transition: fill 0.2s ease;
      fill: var(--twitter);
    }
    span {
      transition: color 0.2s ease;
      color: var(--twitter);
    }
    div {
      transition: background 0.2s ease;
      background: var(--twitter-hover);
    }
  }
`;

export const CommentIcon = styled(IconComment)`
`;

export const RetweetIcon = styled(IconRetweet)`
`;

export const LikeIcon = styled(IconLike)`
`;

export const ShareIcon = styled(IconShare)`
`;