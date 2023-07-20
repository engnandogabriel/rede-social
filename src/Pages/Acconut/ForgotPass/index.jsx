import { Title } from "../../../styles/Text";
import Input from "../../../componets/Inputs/index";
import useForm from "../../../hooks/useForm/useForm";
import Button from "../../../componets/Button";

const ForgotPass = () => {
  const user = useForm();

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <Title>Perdeu a Senha?</Title>
        <div>
          <Input
            label="E-mail / Usuario"
            type="text"
            name="username"
            {...user}
          />
        </div>
        <Button>Enviar</Button>
      </form>
    </div>
  );
};

export default ForgotPass;
