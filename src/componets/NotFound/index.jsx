import React from "react";
import { ContainerFeed } from "../../styles/Container";
import { Title, TextParag } from "../../styles/Text";

const NotFound = () => {
  return (
    <ContainerFeed>
      <Title>Erro: 404</Title>
      <TextParag>Página não encontrada</TextParag>
    </ContainerFeed>
  );
};

export default NotFound;
