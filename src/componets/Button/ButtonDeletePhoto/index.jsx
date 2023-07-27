import React from "react";
import { PhotoDeleteButtonStyled } from "../../../styles/Button";

const ButtonDeletePhoto = ({ children, handleClick }) => {
  return (
    <PhotoDeleteButtonStyled onClick={handleClick}>
      {children}
    </PhotoDeleteButtonStyled>
  );
};

export default ButtonDeletePhoto;
