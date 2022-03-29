import styled from "styled-components";

import { 
  RetweetBold,
  Comment,
  Retweet,
  Like,
  Share,
  } from '../../styles/Icons';

export const Container = styled.div`
  max-width: 100%;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  // margin: 0 16px;
  border-bottom: 1px solid var(--outline);

  > div {
    display: flex;
    flex-direction: row;
  }
`;

export const YouRetweetedIcon = styled(RetweetBold)`
  
`;

export const Retweeted = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 0 1px;
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

`;

export const Media = styled.div`
  
  // width: 504px;
  // height: 504px;
  margin-top: 12px;
  width: 100%;
  height: 250px;
  border-radius: 16px;
  background: #526372;
`;

interface PhotosProps {
  num?: number;
}

export const Photos = styled.div<PhotosProps>`
  // display: flex;
  width: 0;
  height: 0;
`;

export const Photo = styled.div`
  // margin: 0 auto auto 0;
  // width: 100%;
  // height: 100%;
  // border-radius: 99999px;
  position: relative;
  // top: 0;
  // left: 0;

  a {
    // width: 251px;
    // height: 141px;
    // width: 25%;
    // height: 25%;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 12px 0 12px;
  max-width: 425px;

  div {
    display: flex;
    flex-direction: row;

    span {
      margin-left: 10px;
      font-size: 13px;
      color: var(--gray);
    }
  }
`;

export const CommentIcon = styled(Comment)`

`;

export const RetweetIcon = styled(Retweet)`
`;

export const LikeIcon = styled(Like)`
`;

export const ShareIcon = styled(Share)`
`;

