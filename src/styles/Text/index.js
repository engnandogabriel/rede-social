import styled from "styled-components";

export const Title = styled.h2`
  font-size: 3rem;
  font-family: var(--type-second);
  position: relative;
  word-break: keep-all;

  &::after {
    content: "";
    background-color: var(--background-one);
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    bottom: 5px;
    left: -5px;
    border-radius: 0.2rem;
    z-index: -1;
  }
`;

export const TextParag = styled.p`
  display: inline-block;
  padding: 0.5rem 0px;
  line-height: 1;
`;

export const TextLink = styled.p`
  display: inline-block;
  color: rgb(102, 102, 102);
  padding: 0.5rem 0px;
  line-height: 1;

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 100%;
    background: currentcolor;
  }
`;

export const LabelStyle = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
  margin: 10px 0;
`;

export const TextError = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;
