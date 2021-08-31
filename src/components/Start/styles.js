import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  input {
    flex: 1;
    height: 55px;
    padding: 0 20px;
    background: var(--text);
    font-size: 18px;
    color: var(--input);
    border-radius: 3px;
    border: 0;
    margin-block-end: 2em;
  }

  button {
    border-radius: 3px;
    padding: 0 20px;
    margin-left: 5px;
    height: 55px;
    font-weight: bold;
    color: var(--input);
    font-size: 18px;
    border-radius: 3px;
    border: 0;
    background-color: var(--button-background);
    color: var(--text);
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Title = styled.h1`
  display: block;
  margin-block-end: 5em;
`;
