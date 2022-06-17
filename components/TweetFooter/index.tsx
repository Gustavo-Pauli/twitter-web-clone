import React from 'react';

import { Container, Reply, CommentIcon, Retweet, RetweetIcon, Like, LikeIcon, Share, ShareIcon } from './styles';

const FooterMenu: React.FC = () => {
  return (
    <Container>
      <Reply href=''>
        <div>
          <CommentIcon />
        </div>
        <span>289</span>
      </Reply>
      <Retweet>
        <div>
          <RetweetIcon/>
        </div>
        <span>21.5K</span>
      </Retweet>
      <Like>
        <div>
          <LikeIcon />
        </div>
        <span>74.1K</span>
      </Like>
      <Share>
        <div>
          <ShareIcon />
        </div>
      </Share>
    </Container>
  );
}

export default FooterMenu;