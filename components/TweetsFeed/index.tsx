import React from 'react';

import { Container, Tabs, Tab } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>
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

      {/* <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets> */}
    </Container>
  );
}

export default Feed;