import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-context: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--text);
  h1 {
    font-size: 1.3rem;
    margin-block-end: 5em;
  }
  h1,
  h3 {
    color: var(--orange-text);
    margin-top: 10px;
  }

  ul {
    list-style: none;
  }

  li {
    line-height: 2rem;
    span{
      align-content: center;
      background-color: var(--joystick-buttons);
      border-radius: 3px;
      color: var(--joystick-text);
      display: inline-flex;
      height: 30px;
      width: 30px;
      padding-left: 9px;
      &.pause-button {
        padding-left: 1px;
        width: 50px;
      }
    }

  }

  
`;