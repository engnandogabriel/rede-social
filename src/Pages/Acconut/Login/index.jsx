import { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../../componets/Inputs";
import Button from "../../../componets/Button/index";
import { TextLink, Title, TextParag, TextError } from "../../../styles/Text";
import useForm from "../../../hooks/useForm/useForm";
import { ContainerRegister } from "../../../styles/Container";

import { GlobalUserContext } from "../../../context/UserContext/UserContext";

const Login = () => {
  const { userLogin, load, erro } = useContext(GlobalUserContext);

  const userName = useForm(false);
  const password = useForm(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (userName.validate() && password.validate()) {
      await userLogin(userName.value, password.value);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <div>
          <Input label="Usuario" type="text" name="username" {...userName} />
          {erro && <TextError>Usuário ou senha inválidos</TextError>}
        </div>
        <div>
          <Input label="Senha" type="password" name="password" {...password} />
        </div>
        {load ? <Button>Carregando...</Button> : <Button>Entrar</Button>}
      </form>

      <Link to="/login/forgot">
        <TextLink>Perdeu a senha?</TextLink>
      </Link>
      <ContainerRegister>
        <Title>Cadastre-se</Title>
        <TextParag>Ainda não possui conta? Registre-se agora</TextParag>
        <Link to="/login/register">
          <Button>Cadastre-se</Button>
        </Link>
      </ContainerRegister>
    </div>
  );
};

export default Login;
