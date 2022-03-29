import React from 'react';
import Image from 'next/image';

import { 
  Container,  
  Retweeted,
  YouRetweetedIcon,
  Avatar,
  Content,
  Header,
  Media,
  Photos,
  Photo,
  Body,
  Footer,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
  ShareIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <YouRetweetedIcon />
        <span>You Retweeted</span>
      </Retweeted>
      <div>
        <Avatar>
          <a>
            <Image src='https://pbs.twimg.com/profile_images/927333791491919872/HPvj9z-L_400x400.jpg' alt='' layout='fill' objectFit='cover' />
          </a>
        </Avatar>
        <Content>
          <Header>
            <strong className='ellipsis'>giraffalope✨🐱✨</strong>
            <span className='ellipsis'>@Giraffaloops</span>
            <span>·</span>
            <span>Feb 11</span>
          </Header>
          <Body>
            <span>comic about a wanderer 🐸🌠 (1/2)</span>
            
            {/* Media, photo or video */}
            <Media>
              <Photos num={4}>
                <Photo>
                  <a>
                    <Image src='https://pbs.twimg.com/media/Et-YVtKXIAIMNSx?format=jpg&name=large' alt='' layout='fill' objectFit='cover' />
                  </a>
                </Photo>
                {/* <Photo>
                  <a>
                    <Image src='https://pbs.twimg.com/media/Et-YWqMXUAMzr5T?format=jpg&name=large' alt='' layout='fill' objectFit='cover' />
                  </a>
                </Photo>
                <Photo>
                  <a>
                    <Image src='https://pbs.twimg.com/media/Et-YXf9XYAI9hPR?format=jpg&name=large' alt='' layout='fill' objectFit='cover' />
                  </a>
                </Photo>
                <Photo>
                  <a>
                    <Image src='https://pbs.twimg.com/media/Et-YYO0WYAYavJj?format=jpg&name=large' alt='' layout='fill' objectFit='cover' />
                  </a>
                </Photo> */}
              </Photos>

              {/* <Video></Video> */}
            </Media>
          </Body>
          <Footer>
            <div>
              <CommentIcon />
              <span>289</span>
            </div>
            <div>
              <RetweetIcon />
              <span>21.5K</span>
            </div>
            <div>
              <LikeIcon />
              <span>74.1K</span>
            </div>
            <div>
              <ShareIcon />
            </div>
          </Footer>
        </Content>
      </div>
    </Container>
  );
}

export default Tweet;