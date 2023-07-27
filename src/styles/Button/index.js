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

export const ButtonMobile = styled.button`
  background-color: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;

  cursor: pointer;
  padding: 0;

  &:focus,
  &:hover,
  .menuMobileActive {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    color: #fb1;
  }

  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    background-color: currentColor;
    border-radius: 2px;
    box-shadow: 0px 6px currentColor, 0px -6px currentColor;
    transition: 0.2s;
  }
`;

export const ButtonCommentStyled = styled.button`
  border: none;
  cursor: pointer;
  color: #333;
  background: transparent;
  font-size: 1rem;
  overflow: hidden;

  &:focus,
  &:hover {
    svg path {
      fill: #fb1;
      stroke: #fea;
    }
  }

  &:focus,
  &:hover {
    svg g {
      animation: latir 0.6s infinite;
    }
  }

  @keyframes latir {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const PhotoDeleteButtonStyled = styled.button`
  background: rgb(221, 221, 221);
  padding: 0.3rem 0.6rem;
  line-height: 1;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-family: var(--type-first);
  cursor: pointer;
  border-radius: 0.4rem;
  transition: all 0.1s ease 0s;

  &:hover,
  &:focus {
    outline: none;
    background: rgb(255, 255, 255);
    box-shadow: rgb(238, 238, 238) 0px 0px 0px 3px;
    border-color: rgb(51, 51, 51);
  }
`;

export const ButtonLogouStyled = styled.button`
  background: var(--background-two);
  border-color: var(--background-one);
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: all 0.1s ease 0s;
  cursor: pointer;

  &:hover,
  &:focus {
    background: var(--background-two);
    box-shadow: rgb(255, 238, 170) 0px 0px 0px 3px;
    border-color: var(--background-one);
  }
`;
