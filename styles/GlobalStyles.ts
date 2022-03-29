import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    color: var(--primary);
  }

  html, body #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }
  
  html {
    background: var(--background);
  }

  :root {
    --background: #000;
    --background-transparent: rgba(0, 0, 0, 0.7);
    --primary: #E7E9EA;
    // --secondary: #e01674;
    // --secondary-hover: #f91880;
    --secondary: #33A1F2;
    --secondary-hover: #2C8ED6;
    // --secondary: #15181C;
    --search: #202327;
    // --white: #D9D9D9;
    --gray: #71767B;
    --blue-gray: #536471;
    --outline: #2F3336;
    --retweet: #00C06B;
    --like: #E8265E;
    //--twitter: #33A1F2;
    // --twitter-dark-hover: #011017;
    //--twitter-light-hover: #2C8ED6;
    --button-hover: #eff3f41a
    
  }

  .Rotate90Left {
    transform: rotate(-90deg);
  }

  .ProfileHeaderIcons {
    width: 19px;
    height: 19px;

    color: red;
  }

  .TweetYouRetweetedIcon {
    width: 16px;
    height: 16px;
  }

  .TweetFooterIcons {
    width: 19px;
    height: 19px;
  }
`;