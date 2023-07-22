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

  @media (max-width: 640px) {
    &::before {
      display: none;
    }
  }
`;

export const FormConatiner = styled.div`
  display: ${(props) => props.display || "grid"};
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
  margin-bottom: 4rem;
  margin-left: ${(props) => props.marginLeft || "0rem"};
  width: 20rem;
  gap: 2rem;

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
  div {
    width: 300px;
  }
  .img-preview {
    width: 300px;
    border-radius: 1rem;
    background-size: cover;
    background-position: center center;
  }
`;

export const ContainerCreateUser = styled.div`
  display: block;
  margin-top: 4rem;
  margin-bottom: 4rem;
  gap: 2rem;
`;

export const ContainerDashboard = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  padding: 1rem 1rem;
`;
