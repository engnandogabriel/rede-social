import styled from "styled-components";
import Visualizacao from "../../assets/visualizacao.svg";

export const FeedUlStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;

  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeedLiStyled = styled.li`
  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  display: grid;
  border-radius: 0%.2rem;
  overflow: hidden;
  cursor: pointer;

  img {
    grid-area: 1/1;
    width: 100%;
    height: 100%;
  }
  span {
    grid-area: 1/1;
    background-color: rgb(0, 0, 0, 0.3);
    color: #fff;
    font-size: 1rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: none;
  }
  &:hover span {
    display: flex;
  }
  span::before {
    width: 16px;
    height: 10px;
    content: "";
    display: inline-block;
    margin-right: 0 5rem;
    background: url(${Visualizacao}) no-repeat;
    color: red;
  }
  .FeedSpanStyled {
    display: flex;
  }
  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }
`;
