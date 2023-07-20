import React from "react";
import { ReactComponent as LoadIcon } from "../../assets/carregando.svg";
import styled from "styled-components";
const Load = styled.div`
  width: 100px;
  animation: loader-circle 1s linear infinite;

  @keyframes loader-circle {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadGlobal = () => {
  return (
    <Load>
      <LoadIcon />
    </Load>
  );
};

export default LoadGlobal;
