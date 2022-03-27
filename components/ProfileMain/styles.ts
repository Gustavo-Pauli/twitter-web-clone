import styled from "styled-components";
import { ArrowLeft } from "../../styles/Icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header= styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);
  /* TODO: change background color to transparent black and add blur */

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  /* border-bottom: 1px solid var(--outline) */

  > button {
    padding: 8px;
    border-radius: 50%;

    outline: 0;
    cursor: pointer;

    &:hover {
      background:var(--button-hover);
    }
  }
`;

export const ProfileInfo = styled.div`

`;

export const BackIcon = styled(ArrowLeft)`
  width: 40px;
  height: 40px;

  /* fill: var(--like); */
`;
