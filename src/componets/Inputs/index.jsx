import { InputStyled } from "../../styles/Input";
import { LabelStyle, TextError } from "../../styles/Text/index";

const Input = ({ label, type, value, name, onChange, onBlur, erro }) => {
  return (
    <>
      <LabelStyle>{label}</LabelStyle>
      <InputStyled
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
      />
      {erro && <TextError>{erro}</TextError>}
    </>
  );
};

export default Input;
