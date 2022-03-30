import styled from "styled-components";
import { Location, Birthday } from '../../styles/Icons'


export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;  // firefox
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Banner = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min(33vw, 199px);

  background: var(--secondary);

  position: relative;
`;

export const ProfileData = styled.div`
  // padding: min(calc(10vw + 7px), 67px) 16px 0;
  padding: 12px 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  & > * {
    margin-bottom: 12px;
  }

  div > h1 {
    font-weight: bold;
    font-size: 20px;
    color: var(--primary);
  }

  div > h2 {
    font-weight: normal;
    font-size: 15px;
    color: var(--gray);
  }

  p {
    font-weight: normal;
    font-size: 15px;
  }
`;

export const DataHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // margin-bottom: min(36px, max(12px, 3vw));
  // margin-bottom: clamp(8px, calc(6vw), 36px);
  // margin-bottom: 12px;
  // margin-bottom: min(36px, max(12px, 3vw));
  // height: max(18px, min(54px, 8.8vw));
  // margin-top: min(24px, max(72px, 22vw));
`

export const AvatarFlexPosition = styled.div`
  width: max(48px, min(135px, 22vw));
`;

export const AvatarAbsolutePosition = styled.div`
  /* width: max(48px, min(135px, 22.5vw));
  height: max(48px, min(135px, 22.5vw)); */
  width: clamp(48px, calc(22.5vw + 4px), 135px);
  height: clamp(48px, calc(22.5vw + 4px), 135px);

  // border: 3.75px solid var(--background);

  border-radius: 50%;
  //padding: 10px;
  overflow: hidden;

  position: absolute;
  margin-top: -15%;
  // top: max(-67.5px, max(-11vw, -67.5px));

  // margin: -50px 0 0 0;
  // bottom: max(-60px, -10vw);
  //left: 15px;
  // TODO: antialise is cutting the overflow hidden image wrong
`;

export const AvatarBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--background);
`;

export const Avatar = styled.div`
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  @media (min-width: 500px) {
    width: calc(100% - 8px);
    height: calc(100% - 8px);
  }

  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  left: 50%;
  top: 50%;
  border-radius: 50%;
  overflow: hidden;
`;

export const EditButton = styled.div`
  button {
    height: 36px;
    width: 112px;
    padding: 0 16px;
    border-radius: 99999px;
    border: 1px solid var(--blue-gray);
  
    font-weight: bold;
    font-size: 15px;

    transition: background 0.2s ease;

    cursor: pointer;
  
    :hover {
      background: var(--button-hover);
    }
  }
`;

export const AdditionalData = styled.div`
  span {
    margin-right: 12px;

    font-weight: normal;
    font-size: 15px;
    color: var(--gray);
    display: inline-flex;
    vertical-align: middle;

    svg {
      margin-right: 4px;
    }
  }
`;

export const Followage = styled.div`
  display: flex;
  flex-direction: row;
  
  a {
    margin-right: 20px;

    span {
      font-weight: normal;
      font-size: 15px;
      color: var(--gray);
  
      strong {
        color: var(--primary);
      }
    }
  }
`;

export const LocationIcon = styled(Location)`

`;

export const BirthdayIcon = styled(Birthday)`

`;
