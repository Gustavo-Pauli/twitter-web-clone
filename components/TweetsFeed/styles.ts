import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-shrink: 1;
  flex-flow:row nowrap;
  border-bottom: 1px solid var(--outline);
`;

interface Props {
  active?: boolean;
}

export const Tab = styled.div<Props>`
  @media (max-width: 500px) {
    padding: 0 8px;
  }
  padding: 0 16px;
  display: flex;
  align-items: stretch;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  height: 53px;
  margin-top: 10px;

  font-weight: bold;
  font-size: 15px;

  outline: none;
  cursor: pointer;
  transition: background 0.2s ease;

  :hover {
    background: var(--button-hover)
  }

  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    color: ${(props) => (props.active ? 'var(--primary)' : 'var(--gray)')};
    font-weight: ${(props) => (props.active ? 'bold' : 'semibold')};
    
    div {
      position: absolute;
      bottom: 0;
      height: 4px;
      width: calc(100% + 6px);
      border-radius: 99999px;
      /* remover esse css e implementar isso no react */
      background: ${(props) => (props.active ? 'var(--secondary)' : 'var(--transparent)')};
    }
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;

  flex-shrink: 0;
`;
