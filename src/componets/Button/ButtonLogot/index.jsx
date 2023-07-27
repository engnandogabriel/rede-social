import { ButtonLogouStyled } from "../../../styles/Button";

const ButtonLogout = ({ children, handleClick }) => {
  return (
    <ButtonLogouStyled onClick={handleClick}>{children}</ButtonLogouStyled>
  );
};

export default ButtonLogout;
