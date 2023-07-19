import styled from "styled-components";

export const ButtonSyled = styled.button`
  background-color: var(--background-one);
  color: var(--color-one);
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: 0.4rem;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  border: none;
  margin: 10px 0;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px var(--background-one);
  }
`;
