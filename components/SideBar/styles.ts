import styled from "styled-components";
import { Search } from '../../styles/Icons'

export const Container = styled.div`
  display: none;

  @media (min-width: 1083px) {
    display: flex;
    flex-direction: column;

    width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: 100%;

  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--background);

  height: 60.63px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  font-size: 15px;
  font-weight: normal;
  padding: 0 16px 0 52px;
  border-radius: 99999px;
  background: var(--search-bar);
  outline: 0;
  
  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    // transition: 0.2s ease;
  }

  &:focus {
    border: 1px solid var(--secondary);
    background: var(--background);
    
    & + svg {
      fill: var(--secondary);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  fill: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 24px 200px;
  margin-top: 3px;

  > div + div {
    margin-top: 15px;
  }
`;
