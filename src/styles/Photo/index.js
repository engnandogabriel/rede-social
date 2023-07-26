import styled from "styled-components";
import Visualizacao from "../../assets/visualizacao-black.svg";

export const PhotoContentStyled = styled.div`
  margin: auto;
  /* height: 36rem; */
  background-color: #fff;
  border-radius: 0.2rem;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: enterModal 0.3s forwards;

  @keyframes enterModal {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  .photoModalImg {
    grid-row: 1/4;
  }

  .modalContentDetails {
    z-index: 100;
    padding: 2rem 2rem 0 2rem;
  }

  .modalAuthor {
    opacity: 0.5;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .modalAuthor a:hover {
    text-decoration: underline;
  }
  .ModalVizualizacao::before {
    display: inline-block;
    content: "";
    width: 16px;
    height: 10px;
    margin-right: 0.5rem;
    background: url(${Visualizacao}) no-repeat;
  }

  .modalAttributes {
    display: flex;
    font-size: 1.25rem;
    font-family: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
    align-items: center;
  }

  .modalAttributes li {
    color: #000;
    margin-right: 2rem;
  }
  .modalAttributes li::before {
    content: "";
    display: inline-block;
    height: 25px;
    margin-right: 0.5rem;
    position: relative;
    top: 3px;
    width: 2px;
    background-color: #000;
    margin-top: 5px;
  }
  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);

    .photoModalImg {
      grid-row: 1;
    }
  }
`;

export const PhotoCommentStyled = styled.div`
  padding: 0px 2rem;
`;
