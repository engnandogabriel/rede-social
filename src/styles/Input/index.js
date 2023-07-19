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
