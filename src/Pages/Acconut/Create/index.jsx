import { useContext } from "react";
import { TextError, Title } from "../../../styles/Text";
import Input from "../../../componets/Inputs";
import Button from "../../../componets/Button";
import useForm from "../../../hooks/useForm/useForm";

import { GlobalUserContext } from "../../../context/UserContext/UserContext";

const Create = () => {
  const { createUser, erro, load } = useContext(GlobalUserContext);

  const userName = useForm();
  const email = useForm("email");
  const password = useForm("password");
  function handleSubmit(e) {
    e.preventDefault();
    if (userName.validate() && email.validate && password.validate()) {
      createUser(userName.value, email.value, password.value);
    }
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <Title>Cadastre-se</Title>
          <div>
            <Input label="Usuario" type="text" name="username" {...userName} />
          </div>
          <div>
            <Input label="E-mail " type="text" name="email" {...email} />
          </div>
          <div>
            <Input
              label="Senha"
              type="password"
              name="password"
              {...password}
            />
          </div>
          {erro && <TextError>E-mail já cadastrado! Experimente outro e-mail. </TextError>}
          {load ? <Button>Carregando</Button> : <Button>Cadastrar</Button>}
        </form>
      </div>
    </>
  );
};

export default Create;
