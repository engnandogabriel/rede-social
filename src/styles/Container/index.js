import styled from "styled-components";

import ImageBG from "../../assets/login.jpg";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    display: block;
    content: "";
    width: 100%;
    background: url(${ImageBG}) no-repeat center center;
    background-size: cover;
  }

  div {
    width: 400px;
  }

  .form-container {
    /* opacity: 0; */
    transform: translateX(-20px);
    animation: animateLeft 0.5s forwards;
    margin-top: 20vh;
  }
  @keyframes animateLeft {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
      transform: translateX(50px);
    }
    100% {
      transform: inherit;
    }
  }
`;

export const ContainerRegister = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const FormConatiner = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

export const ContainerDashboard = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;
