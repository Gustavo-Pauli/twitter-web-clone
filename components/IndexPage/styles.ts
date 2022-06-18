import styled from 'styled-components';

export const Container = styled.div`
  background: var(--background);
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: auto;

  display: flex;
  justify-content: center;
  // position: static;
  flex-direction: row-reverse;
  width: 100%;
  background: var(--background);

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  span {
    font-size: 52px;
  }
`;


export const ContentSection = styled.div`
  width: 80%;
  height: 100vh;
  padding: 16px;
  @media (max-width: 1000px) {
    width: 100%;
    height: 720px;
    padding: 0;
  }

  display: flex;
  justify-content: center;
`;

export const ImageSection = styled.div`
  overflow: hidden;

  width: 100%;
  height: 100vh;
  @media (max-width: 1000px) {
    width: 100%;
    height: 40vh;
    background: var(--twitter);
  }

  // background: var(--index-signup);
  background: var(--twitter);

  img {
    height: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 528px;
  min-width: 45vw;

  display: flex;
  flex-direction: column;
  padding: 20px;

  // happening now
  > h1 {
    font-family: 'Archivo Black', sans-serif;
    font-size: 64px;
    margin: 48px 0;
  }

  // join twitter today
  > h2 {
    font-family: 'Archivo Black', sans-serif;
    font-size: 31px;
    margin-bottom: 32px;
  }

  button {
    margin-bottom: 12px;
    max-width: 280px;
    height: 40px;
    font-size: 15px;

    :hover {
      cursor: pointer;
    }
  }

  > div {
    margin-top: auto;

    > button {
      margin-bottom: 12px;
      width: 100%;
      max-width: 280px;
      height: 38px;
    }

    // already have an account?
    h3 {
      // font-family: 'Archivo Black', sans-serif;
      font-size: 17px;
      margin-bottom: 21px;
    }
    
  }

  > span {
    text-align: center;
    max-width: 280px;
    font-size: 16px;
    margin-bottom: 8px;
    margin-top: -4px;
  }


  // background: darkblue;
  @media (max-width: 1000px) {
    // background: darkgreen;
  }
  @media (max-width: 500px) {
    // background: darkred;
    > h1 {
      font-size: 36px;
    }
  }
  `;
