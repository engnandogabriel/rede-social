import styled from "styled-components";

export const GlobalLoadStyled = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  z-index: 100;
  width: 100%;
  height: 100vh;

  div {
    margin: auto;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    border-radius: 50%;
    background-color: rgb(255, 255, 255, 0.5);
  }
`;

export const LoadImageStyled = styled.div`
  display: grid;

  .image-load {
    display: block;
    max-width: 100%;
    grid-area: 1/1;
    opacity: 0;
    transition: 0.2s;
  }

  .skeleton-load {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #eee 0px, #fff 50%, #eee 100%);
    background-color: #eee;
    background-size: 200%;
    animation: skeleton 1.5s infinite linear;
  }

  @keyframes skeleton {
    from {
      background-position: 0px;
    }
    to {
      background-position: -200%;
    }
  }
`;
