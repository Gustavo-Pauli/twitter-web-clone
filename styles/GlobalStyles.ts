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
    // --search: #202327;
    // --white: #D9D9D9;
    --gray: #71767B;
    --blue-gray: #536471;
    --search-bar: rgb(32, 35, 39);
    --side-bar-body: rgb(22, 24, 28);
    --outline: #2F3336;
    --retweet: rgb(0, 186, 124);
    --retweet-hover: rgba(0, 186, 124, 0.1);
    --like: rgb(249, 24, 128);
    --like-hover: rgba(249, 24, 128, 0.1);
    --twitter: rgb(29, 155, 240);
    --twitter-hover: rgba(29, 155, 240, 0.1);
    // --twitter-dark-hover: #011017;
    //--twitter-light-hover: #2C8ED6;
    --button-hover: #eff3f41a;
    --light-hover: rgba(255, 255, 255, 0.03);
    // --tweet-generic-buttons-hover: rgba(29, 155, 240, 0.1);
  }

  .Rotate90Left {
    transform: rotate(-90deg);
  }

  .ProfileHeaderIcons {
    width: 19px;
    height: 19px;
  }

  .TweetYouRetweetedIcon {
    width: 16px;
    height: 16px;
  }

  .TweetFooterIcons {
    width: 19px;
    height: 19px;
  }

  .TweetIconHoverColor {
    background: var(--twitter-hover);
  }

  .TweetRetweetIconHoverColor {
    background: var(--twitter-hover);
  }

  .BlockSelection {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }
`;