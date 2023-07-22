import styled from "styled-components";
export const InputStyled = styled.input`
  border: 1px solid #eee;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: var(--background-two);
  transition: 0.2s;
  outline: none;
  margin: 10px 0;

  &:hover,
  &:focus {
    outline: none;
    border-color: var(--background-one);
    background: white;
    box-shadow: 0 0 0 3px var(--color-two);
  }
`;

export const InputPostStyled = styled.label`
  width: 100%;
  border: 1px solid rgb(238, 238, 238);
  font-size: 1rem;
  border-radius: 0.4rem;
  background: rgb(238, 238, 238);
  padding: 0.8rem;
  transition: all 0.1s ease 0s;
  margin-bottom: 1rem;
  display: block;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;

  svg {
    display: block;
    margin: 0px auto;
    transition: all 0.2s ease 0s;
  }

  .input-post {
    display: none;
  }
`;
