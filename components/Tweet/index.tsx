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
  Reply,
  Retweet,
  Like,
  Share,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <YouRetweetedIcon />
        <a>
          <span>You Retweeted</span>
        </a>
      </Retweeted>
      <div>
        <Avatar>
          <a>
            <Image src='https://pbs.twimg.com/profile_images/927333791491919872/HPvj9z-L_400x400.jpg' alt='' layout='fill' objectFit='cover' />
          </a>
        </Avatar>
        <Content>
          <Header>
              <strong className='ellipsis'><a>giraffalope✨🐱✨</a></strong>
            <span className='ellipsis'>@Giraffaloops</span>
            <span>·</span>
              <span><a>Feb 11</a></span>
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
            <Reply>
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
          </Footer>
        </Content>
      </div>
    </Container>
  );
}

export default Tweet;