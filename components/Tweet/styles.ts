import styled from "styled-components";

import { 
  RetweetBold as IconRetweetBold,
  Comment as IconComment,
  Retweet as IconRetweet,
  Like as IconLike,
  Share as IconShare,
  } from '../../styles/Icons';

export const Container = styled.div`
  max-width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  // margin: 0 16px;
  border-bottom: 1px solid var(--outline);

  transition: background 0.2s ease;
  cursor: pointer;

  :hover {
    background: var(--light-hover);
  }

  > div {
    display: flex;
    flex-direction: row;
  }
`;

export const YouRetweetedIcon = styled(IconRetweetBold)`
  
`;

export const Retweeted = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 0 4px;
  // padding-top: 8px;

  margin-left: 32px;

  > span {
    margin-left: 12px;
    font-size: 13px;
    font-weight: bold;
    color: var(--gray);
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-shrink: 0;
  position: relative;
  height: 48px;
  width: 48px;
  background: var(--gray);
  border-radius: 99999px;
  overflow: hidden;
  margin-right: 12px; 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: clip;
  width: 100%;
  // max-width: 100%;
`;

export const Header = styled.div`
  display: flex;
  white-space: nowrap;
  // text-overflow: ellipsis;
  // overflow: hidden;

  * {
    margin-right: 5px;
  }

  strong {
    font-size: 15px;
    font-weight: bold;
    color: var(--primary);
  }

  span {
    font-size: 15px;
    font-weight: normal;
    color: var(--gray);
  }

  .ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Body = styled.div`
  margin-top: 0px;

  span {
    font-size: 15px;
    font-weight: normal;
    color: var(--primary);
  }
`;

export const Media = styled.div`
  
  // width: 504px;
  // height: 504px;
  margin-top: 12px;
  width: 100%;
  height: 390px;
  border-radius: 16px;
  overflow: hidden;
  background: #526372;
`;

interface PhotosProps {
  num?: number;
}

export const Photos = styled.div<PhotosProps>`
  // display: flex;
  width: 100%;
  height: 100%;
`;

export const Photo = styled.div`
  // margin: 0 auto auto 0;
  // width: 100%;
  // height: 100%;
  // border-radius: 99999px;
  position: relative;
  width: 100%;
  height: 100%;
  // top: 0;
  // left: 0;

  a {
    width: 100%;
    height: 100%;
    // width: 251px;
    // height: 141px;
    // width: 25%;
    // height: 25%;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 8px 0;
  max-width: 425px;

  * {
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: row;

    span {
      margin-left: 6px;
      font-size: 13px;
      color: var(--gray);
    }
  }
`;

export const Reply = styled.div`
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

  div {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
  
export const Retweet = styled.div`
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

  div {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Like = styled.div`
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

  div {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Share = styled.div`
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

  div {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
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

