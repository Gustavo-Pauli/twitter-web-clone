import React from 'react';

import Tweet from '../Tweet';

import { Container, Tabs, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs className='BlockTextSelection'>
        <Tab active>
          <div>
            Tweets
            <div></div>
          </div>
        </Tab>
        <Tab>
          <div>
            Tweets & replies
          </div>
        </Tab>
        <Tab>
          <div>
            Media
            <div />
          </div>
        </Tab>
        <Tab>
          <div>
            Likes
          </div>
        </Tab>
      </Tabs>

      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
}

export default Feed;