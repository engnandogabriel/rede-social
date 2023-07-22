import { InputPostStyled } from "../../../styles/Input";

import { ReactComponent as Add } from "../../../assets/adicionar.svg";

const InputPost = ({ type, name, id, onChange }) => {
  return (
    <>
      <InputPostStyled>
        <Add />
        <input
          type={type}
          name={name}
          id={id}
          onChange={onChange}
          className="input-post"
        />
      </InputPostStyled>
    </>
  );
};

export default InputPost;
