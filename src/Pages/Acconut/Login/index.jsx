import { Link } from "react-router-dom";
import Input from "../../../componets/Inputs";
import Button from "../../../componets/Button/index";
import { TextLink, Title, TextParag } from "../../../styles/Text";
import useForm from "../../../hooks/useForm/useForm";
import { ContainerRegister } from "../../../styles/Container";

const Login = () => {
  const userName = useForm("email");
  const password = useForm();
  console.log(userName);

  function handleSubmit(e) {
    e.preventDefault();
    if (userName.validate && password.validate) alert("validado");
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
        <TextLink>Perdeu a conta</TextLink>
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
