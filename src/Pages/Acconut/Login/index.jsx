import { useContext } from "react";
import { Link } from "react-router-dom";
import Input from "../../../componets/Inputs";
import Button from "../../../componets/Button/index";
import { TextLink, Title, TextParag } from "../../../styles/Text";
import useForm from "../../../hooks/useForm/useForm";
import { ContainerRegister } from "../../../styles/Container";

import { GlobalUserContext } from "../../../context/UserContext/UserContext";

const Login = () => {
  const { loginUser } = useContext(GlobalUserContext);

  const userName = useForm("email");
  const password = useForm();

  function handleSubmit(e) {
    e.preventDefault();
    if (userName.validate() && password.validate()) {
      loginUser(userName, password);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <div>
          <Input label="Usuario" type="text" name="username" {...userName} />
        </div>
        <div>
          <Input label="Senha" type="password" name="password" {...password} />
        </div>
        <Button>Entrar</Button>
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
